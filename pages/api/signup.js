import connectDB from '../../database/connect';
import User from '../../model/Schema';
import bcrypt from 'bcryptjs';
import { isEmailValid, isPasswordValid, isUsernameValid } from '../../helpers/validation';

const isDataValid = (email, password, username) => (
    isEmailValid(email) && isPasswordValid(password) && isUsernameValid(username)
);

export default async function handler(req, res){
    connectDB().catch(err => res.status(500).json({ message: 'Internal server error!' }));
    if (req.method === 'POST') {
        console.log(req.body)
        if (!req.body) return res.status(404).json({ message: 'Invalid arguments' });

        const { email, password, username } = req.body.formData;
        console.log(isEmailValid(email), isPasswordValid(password), isUsernameValid(username))

        if (!isDataValid(email, password, username)) return res.status(404).json({ message: 'Invalid arguments' });

        try {
            const savedUser = await User.findOne({ email });
            const hashedPassword = await bcrypt.hash(password, 12);
            if (savedUser) return res.status(400).json({ message: 'User already exists! '});
            const newUser = new User({ email, username, password: hashedPassword });
            const user = await newUser.save();
            console.log('ASHUTOSH - ', user._doc);
            return res.status(201).json({ message: 'Signed up! ', user: { ...user._doc, password: null } });
        } catch(err) {
            res.status(500).json({ message: 'Internal Server Error '});
        }

    } else {
        res.status(403).json({ message: 'Method not allowed' });
    }
}