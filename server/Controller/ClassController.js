import Class from "../Model/Class.js";


export const createClass = async (req, res) => {
    try {
        const data = await Class.create(req.body);
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
export const getClass = async (req, res) => {
    try {
        const data = await Class.find();
       return res.status(200).json({
          status: "OK",
          data: data,
        });
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
}

export const getClassId = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Class.findById(id);
       return res.status(200).json({
          status: "OK",
          data: data,
        });
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
}
export const updateClass = async (req, res) => {  
    try {
        const id = req.params.id;
        const student = req.body
        const data = await Class.findByIdAndUpdate(id,student,{new:true});
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
export const deleteClass = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Class.findByIdAndDelete(id);
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