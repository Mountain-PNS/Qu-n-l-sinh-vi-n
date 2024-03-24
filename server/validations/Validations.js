import Joi from 'joi';
export const  StudentValidate = Joi.object({
    studentId: Joi.string().required().messages({
        "string.empty": "Mã sinh viên không được để trống",
    }),
    name : Joi.string().required().messages({
        "string.empty": "Tên sinh viên không được để trống",
    }),
    email : Joi.string().email().required().messages({
        "string.email": "Email không hợp lệ",
        "string.empty": "Email không được để trống",
    }),
    phone : Joi.string().required().messages({
        "string.empty": "Số điện thoại không được để trống",
    }),
    gender : Joi.string().valid("Nam","Nữ").required().messages({
        "string.empty": "Giới tính không được để trống",
    }),
    dateOfBirth : Joi.date().required().messages({
        "date.empty": "Ngày sinh không được để trống",
    }),
    status : Joi.string().valid("Đang học","Bỏ học","Bảo lưu").messages({
        "string.empty": "Trạng thái không được để trống",
    })
})