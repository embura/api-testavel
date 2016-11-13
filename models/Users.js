export default(sequelize, Datatype) => {
	const Users = sequelize.define('Users', {
		id: {
			type: Datatype.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name:{
			type: Datatype.STRING,
			allowNull: false,
			validate:{
				notEmpty: true
			}
		},
		email:{
			type: Datatype.STRING,
			allowNull: false,
			validade:{
				notEmpty: true
			}			
		},
		password:{
			type: Datatype.STRING,
			allowNull: false,
			validade:{
				notEmpty: true
			}
		}
	},{
		
	});
	return Users;
}
