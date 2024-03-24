import Lecturers from "../Model/Lecturers.js";

export const createLecturers = async (req, res) => {
    try {
        const data = await Lecturers.create(req.body);
        if(!data){
          return  res.status(200).json({
                status: "ERROR",
                message: "Thêm giảng viên thất bại",
            });
        }
        return res.status(200).json({
          status: "OK",
          data: data,
        });
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
}
export const getLecturers = async (req, res) => {
    try {
        const data = await Lecturers.find();
       return res.status(200).json({
          status: "OK",
          data: data,
        });
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
}

export const getLecturersId = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Lecturers.findById(id);
       return res.status(200).json({
          status: "OK",
          data: data,
        });
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
}
export const updateLecturers = async (req, res) => {  
    try {
        const id = req.params.id;
        const student = req.body
        const data = await Lecturers.findByIdAndUpdate(id,student,{new:true});
        if (!data) {
          return res.status(200).json({
            status: "ERROR",
            message: "Cập nhật thông tin giảng viên thất bại",
          });
        }  
        return res.status(200).json({
          status: "OK",
          data: data,
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }     
}
export const deleteLecturers = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Lecturers.findByIdAndDelete(id);
        if (!data) {
          return res.status(200).json({
            status: "ERROR",
            message: "Xóa giảng viên thất bại",
          });
        }  
        return res.status(200).json({
          status: "OK",
          data: data,
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }     
}