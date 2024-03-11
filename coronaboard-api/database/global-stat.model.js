const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define(
        'GlobalState', /// arg1 : model 이름
        /// arg2 : attributes
        {
            id: {
                autoIncrement: true, // 값 자동 증가
                type: DataTypes.INTEGER.UNSIGNED, // 부호 없는 정수(양의 정수)
                allowNull: false, // 빈 값 허용 X
                primaryKey: true,
            },
            cc: {
                type: DataTypes.CHAR(2),
                allowNull: false,
            },
            data: {
                type: DataTypes.DATEONLY,
                allowNull: false,
            },
            confirmed: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            death: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            released: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            tested: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            testing: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            negative: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },

        },
        /// arg3 : options
        {
            sequelize,
            tableName: 'GlobalStat',
            indexes: [
                {
                    name: 'PRIMARY',
                    unique: true,
                    fields: [{ name: 'id' }],
                },
                {
                    name: 'ccWithDate',
                    unique: true,
                    fields: [{ name: 'cc' }, { name: 'date' }],
                },
            ],
            timestamps: false,   //
        },
    );
};