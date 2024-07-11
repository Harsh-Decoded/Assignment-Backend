const users = [];
const createResponse = (displayMessage, data, isSuccess) => ({ displayMessage, data, isSuccess });

const getUsers = async (req, res) => {
    const usersWithoutPasswords = users.map(({ password, ...rest }) => rest);
    res.status(200).json(createResponse("", usersWithoutPasswords, true));
};

const addUser = async (req, res) => {
    const { body } = req;
    let message = "";

    if (!body || typeof body !== 'object') {
        return res.status(200).json(createResponse("Invalid request body", null, false));
    }

    const { userName, email, password } = body;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!('userName' in body) || !userName.trim()) {
        message = "User Name is required!";
    } else if (!('email' in body) || !email.trim()) {
        message = "Email is required!";
    } else if (!emailPattern.test(email)) {
        message = "Invalid email format!";
    } else if (!('password' in body) || !password.trim()) {
        message = "Password is required!";
    } else {
        users.push({ userName: userName.trim(), email: email.trim(), password: password.trim() });
        message = "User added successfully!";
        const usersWithoutPasswords = users.map(({ password, ...rest }) => rest);
        return res.status(200).json(createResponse(message, usersWithoutPasswords, true));
    }

    return res.status(200).json(createResponse(message, null, false));
};

module.exports = { getUsers, addUser };