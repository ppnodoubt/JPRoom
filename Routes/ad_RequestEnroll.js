exports.requestWH = function(req,res,app,session,db){
    db.query('SELECT * FROM RequestForEnroll', function(error,results,fields){
        if(error) throw error;
        else {
          res.render('User/Admin/ad_RequestEnroll',{'app':app,'session':session,'db':db, 'result':results});
        }
    })
}

// exports.requestWH_OK = function(req,res,app,db) {
//   var enrollWarehouse = {
//       "reqID" : req.body.reqID,
//       "logID" : req.body.logID
//   }
//   db.query('INSERT INTO EnrolledWarehouse SET ?', enrollWarehouse, function (error, results, fields) {
//       if (error) {
//           console.log("error ocurred", error);
//           res.redirect('/Admin/RequestEnroll');
//       } else {
//           req.session['reqID'] = enrollWarehouse.reqID;
//           req.session['logID'] = enrollWarehouse.logID;
//           res.redirect('/');
//       }
//   });
// }
//
// exports.requestWH_NO = function(req,res,app,db) {
//   var enrollWarehouse = {
//       "reqID" : req.body.reqID,
//       "logID" : req.body.logID
//   }
//   db.query('INSERT INTO EnrolledWarehouse SET ?', enrollWarehouse, function (error, results, fields) {
//       if (error) {
//           console.log("error ocurred", error);
//           res.redirect('/Admin/RequestEnroll');
//       } else {
//           req.session['reqID'] = enrollWarehouse.reqID;
//           req.session['logID'] = enrollWarehouse.logID;
//           res.redirect('/');
//       }
//   });
// }
