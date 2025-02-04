var user = require('../model/usermodel');
exports.insert = async(req,res) => {
    user.create(req.body);
    res.status(200).json({
        status:"success"
    });
};
exports.getdata = async(req,res) => {
    // var data = await user.find().countDocuments(); 
    // var data = await user.find().skip(2); 
    // var data = await user.find().select("email").select("password");
    // var data = await user.find({"email" : "vandana123@gmail.com"}); 
    //pagenation
    var limit= 3;
    var page_no = req.body.page_no;
    if(page_no == undefined)
    {
        page_no=1;
    }
    // var data = user.find().countDocuments();
    var start = (page_no - 1) * limit;
    var data = await user.find().skip(start).limit(limit);
    var total_record = await user.find().countDocuments();
    var total_page = await Math.ceil(total_record/limit);

    res.status(200).json({
        status : "get data",
        data,
        page_no,
        total_page,
        total_record
    });
   
}
exports.get_update_data = async(req,res) => {
    var id = req.params.id;
    var data = await user.findById(id);
    res.status(200).json({
        status:"success",
        data
    });
};
exports.update_data = async(req,res) => {
    var id = req.params.id;
    var data = await user.findByIdAndUpdate(id,req.body);
    res.status(200).json({
        status:"success",
        data
    });
};
exports.delete_data = async(req,res) =>{
    var id = req.params.id;
    var data = await user.findByIdAndDelete(id);
    res.status(200).json({
        status : "success",
        data
    });
};