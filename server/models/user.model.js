module.exports = (connection, DataTypes) => {
    const User = connection.define(
        "users",
        {
            // Model attributes are defined here
            username: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    isEmail: true,
                }
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            // Other model options go here
            updatedAt: false,
        }
    );
    return User;
};
