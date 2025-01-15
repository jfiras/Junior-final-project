module.exports = (connection, DataTypes) => {
    const Comment = connection.define(
        "comments",
        {
            // Model attributes are defined here
            body: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
        },
    );
    return Comment;
};
