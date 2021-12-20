const useApi = () => {

    const login = (email, password) => {
        let users = null

        try {
            users = JSON.parse(localStorage.getItem("USERS"));
        } finally {
            if (!users) {
                users = [];
            }
        }

        return users.some((user) => {
            const validation = user.email === email && user.password === password;

            if (validation) {
                localStorage.setItem("USER", JSON.stringify(user));
            }

            return validation;
        });
    };

    const register = (user) => {
        let users = null

        try {
            users = JSON.parse(localStorage.getItem("USERS"));
        } finally {
            if (!users) {
                users = [];
            }
        }

        users.push({...user, balance: 1000000});
        localStorage.setItem("USERS", JSON.stringify(users));
    };

    return {
        register,
        login,
    };
};

export default useApi;