import Subject from "../Model/Subject.js";


export const createSubject = async (req, res) => {
    try {
        const data = await Subject.create(req.body);
        if(!data){
          return  res.status(200).json({
                status: "ERROR",
                message: "Thêm môn học thất bại",
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
export const getSubject = async (req, res) => {
    try {
        const data = await Subject.find();
       return res.status(200).json({
          status: "OK",
          data: data,
        });
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
}

export const getSubjectId = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Subject.findById(id);
       return res.status(200).json({
          status: "OK",
          data: data,
        });
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
}
export const updateSubject = async (req, res) => {  
    try {
        const id = req.params.id;
        const student = req.body
        const data = await Subject.findByIdAndUpdate(id,student,{new:true});
        if (!data) {
          return res.status(200).json({
            status: "ERROR",
            message: "Cập nhật thông tin môn học thất bại",
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
export const deleteSubject = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Subject.findByIdAndDelete(id);
        if (!data) {
          return res.status(200).json({
            status: "ERROR",
            message: "Xóa môn học thất bại",
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