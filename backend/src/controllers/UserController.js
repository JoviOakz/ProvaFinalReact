const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");
const { User } = require('../models/user');
require('dotenv').config();

class UserController {
    static async register(req, res) {
        const { name, phone, email, password, confirmPassword, role } = req.body;
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!name || !role || !email || !password || !phone)
            return res.status(400).json({ message: "Missing information." });

        const userExist = await User.findOne({ email: email });

        if (password != confirmPassword)
            return res.status(400).json({ message: "Passwords don't match." });

        if (!regex.test(password))
            return res.status(400).json({ message: "The password is weak." });

        if (userExist)
            return res.status(409).json({ message: "This email is already registered." });

        const normalizedName = name.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const salt = await bcrypt.genSalt(12);
        const passwordHash = await bcrypt.hash(password, salt);

        const user = new User({
            name: normalizedName,
            email,
            password: passwordHash,
            phone,
            role,
            createdAt: Date.now(),
            updatedAt: Date.now(),
            removedAt: null,
        });

        try {
            await User.create(user);
            res.status(201).send({ message: "Created user with sucessfully", data: user });
        } catch (error) {
            return res.status(500).send({ message: "Something failed", data: error.message })
        }
    }

    static async login(req, res) {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).send({ message: "Invalid email or password." });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).send({ message: "Invalid email or password." });
        }

        const secret = process.env.SECRET;
        const token = jwt.sign(
            {
                id: user._id,
                role: user.role,
                name: user.name,
            },
            secret,
            {
                expiresIn: '2d',
            }
        );

        return res.status(200).send({ token });
    }

    static async updateEmail(req, res) {
        const { oldEmail, newEmail, confirmEmail } = req.body;
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@])[A-Za-z\d@]{8,}$/;
        const id = req.user?.id;
        const userId = await User.findById(id);
        console.log('User ID from token:', userId);

        if (!oldEmail || !newEmail || !confirmEmail) {
            return res.status(400).json({ message: "Missing information." });
        }

        if (!userId) {
            return res.status(400).json({ message: "User not found." });
        }

        const validEmail = await bcrypt.compare(oldEmail, userId.email);

        if (!validEmail)
            return res.status(400).json({ message: "Old email is incorrect." });

        if (newEmail !== confirmEmail)
            return res.status(400).json({ message: "Emails don't match." });

        if (!regex.test(newEmail))
            return res.status(400).json({ message: "'@' is missing" });

        userId.email = newEmail;
        console.log(newEmail);
        userId.updatedAt = Date.now();

        try {
            await userId.save();
            res.status(200).send({ message: "Email updated successfully." });
        } catch (error) {
            return res.status(500).send({ message: "Something went wrong.", data: error.message });
        }
    }

    static async updatePhone(req, res) {
        const { oldPhone, newPhone, confirmPhone } = req.body;
        const id = req.user?.id;
        const userId = await User.findById(id);
        console.log('User ID from token:', userId);

        if (!oldPhone || !newPhone || !confirmPhone) {
            return res.status(400).json({ message: "Missing information." });
        }

        if (!userId) {
            return res.status(400).json({ message: "User not found." });
        }

        const validPhone = await bcrypt.compare(oldPhone, userId.phone);

        if (!validPhone)
            return res.status(400).json({ message: "Old phone is incorrect." });

        if (newPhone !== confirmPhone)
            return res.status(400).json({ message: "Phones don't match." });

        userId.phone = newPhone;
        console.log(newPhone);
        userId.updatedAt = Date.now();

        try {
            await userId.save();
            res.status(200).send({ message: "Phone updated successfully." });
        } catch (error) {
            return res.status(500).send({ message: "Something went wrong.", data: error.message });
        }
    }
}

module.exports = UserController;