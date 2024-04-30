// const multer = require("multer");

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "public/images");
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     cb(null, file.fieldname + "-" + uniqueSuffix);
//   },
// });

// const upload = multer({ storage: storage }).single("avatar");
function uploadFille(req, res) {
  console.log(`req.file: ${req.file} ||| req.body: ${JSON.stringify(req.body)}`);

  res.json({
    body: req.body,
    file: req.file,
  });

  // if (req.body.file) {
  // upload()(req, res, function (err) {
  //   if (err) {
  //     res.json({
  //       message: "Failed to upload the file!",
  //     });
  //     return;
  //   }
  //   res.json({
  //     message: "Files uploaded!",
  //     file: req.file,
  //   });
  // });
  // res.json({
  //   message: `${req.body.file} has been uploaded`,
  // });
  // return;
  // }
  // res.json({
  //   message: `file is not found`,
  // });
}

module.exports = { uploadFille };
