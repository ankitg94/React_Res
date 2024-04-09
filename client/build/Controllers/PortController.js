const nodemailer =require('nodemailer')

//transporter
const transporter =nodemailer.createTransport({
   host:'smtp.gmail.com',
   port:587,
   tls:true,
   auth:{
    user:"ankit8009565@gmail.com",
    pass:"dyxumjsjdljqhcfu"
   }
})

const sendController = (req,res)=>{
    try{
   const {name,email,msg} =req.body
   if(!name || !email ||!msg){
    return res.status(500).send({
        success:false,
        message:"Please provide all the fields "
    })
   }
   //transporter
 transporter.sendMail({
    to: "ankit8009565@gmail.com",
    from: "ankit8009565@gmail.com",
    subject: "Regarding query",
    html: `
      <h5>Detail Information</h5>
      <ul>
        <li><p>Name : ${name}</p></li>
        <li><p>Email : ${email}</p></li>
        <li><p>Message : ${msg}</p></li>
      </ul>
    `,
  });

    return res.status(200).send({
        success:true,
        message:"yes  success"
    })
    
}
    catch(error){
     console.log(error)
    return res.status(500).send({
        success:"False",
        error
    })
    }
}
module.exports = {sendController };