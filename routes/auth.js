const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const User = mongoose.model("User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const nodemailer = require("nodemailer")
const sendgridTransport = require("nodemailer-sendgrid-transport")
const { JWT_SECRET } = require("../config/keys")
const requireLogin = require("../middleware/requireLogin")
const crypto = require("crypto")
const { SENDGRID_API, EMAIL } = require("../config/keys")

let htmlTemplate = `

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html data-editor-version="2" class="sg-campaigns" xmlns="http://www.w3.org/1999/xhtml">
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
      <!--[if !mso]><!-->
      <meta http-equiv="X-UA-Compatible" content="IE=Edge">
      <!--<![endif]-->
      <!--[if (gte mso 9)|(IE)]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG/>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
      <![endif]-->
      <!--[if (gte mso 9)|(IE)]>
  <style type="text/css">
    body {width: 600px;margin: 0 auto;}
    table {border-collapse: collapse;}
    table, td {mso-table-lspace: 0pt;mso-table-rspace: 0pt;}
    img {-ms-interpolation-mode: bicubic;}
  </style>
<![endif]-->
      <style type="text/css">
    body, p, div {
      font-family: arial,helvetica,sans-serif;
      font-size: 14px;
    }
    body {
      color: #000000;
    }
    body a {
      color: #1188E6;
      text-decoration: none;
    }
    p { margin: 0; padding: 0; }
    table.wrapper {
      width:100% !important;
      table-layout: fixed;
      -webkit-font-smoothing: antialiased;
      -webkit-text-size-adjust: 100%;
      -moz-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }
    img.max-width {
      max-width: 100% !important;
    }
    .column.of-2 {
      width: 50%;
    }
    .column.of-3 {
      width: 33.333%;
    }
    .column.of-4 {
      width: 25%;
    }
    ul ul ul ul  {
      list-style-type: disc !important;
    }
    ol ol {
      list-style-type: lower-roman !important;
    }
    ol ol ol {
      list-style-type: lower-latin !important;
    }
    ol ol ol ol {
      list-style-type: decimal !important;
    }
    @media screen and (max-width:480px) {
      .preheader .rightColumnContent,
      .footer .rightColumnContent {
        text-align: left !important;
      }
      .preheader .rightColumnContent div,
      .preheader .rightColumnContent span,
      .footer .rightColumnContent div,
      .footer .rightColumnContent span {
        text-align: left !important;
      }
      .preheader .rightColumnContent,
      .preheader .leftColumnContent {
        font-size: 80% !important;
        padding: 5px 0;
      }
      table.wrapper-mobile {
        width: 100% !important;
        table-layout: fixed;
      }
      img.max-width {
        height: auto !important;
        max-width: 100% !important;
      }
      a.bulletproof-button {
        display: block !important;
        width: auto !important;
        font-size: 80%;
        padding-left: 0 !important;
        padding-right: 0 !important;
      }
      .columns {
        width: 100% !important;
      }
      .column {
        display: block !important;
        width: 100% !important;
        padding-left: 0 !important;
        padding-right: 0 !important;
        margin-left: 0 !important;
        margin-right: 0 !important;
      }
      .social-icon-column {
        display: inline-block !important;
      }
    }
  </style>
      <!--user entered Head Start--><!--End Head user entered-->
    </head>
    <body>
      <center class="wrapper" data-link-color="#1188E6" data-body-style="font-size:14px; font-family:arial,helvetica,sans-serif; color:#000000; background-color:#FFFFFF;">
        <div class="webkit">
          <table cellpadding="0" cellspacing="0" border="0" width="100%" class="wrapper" bgcolor="#FFFFFF">
            <tr>
              <td valign="top" bgcolor="#FFFFFF" width="100%">
                <table width="100%" role="content-container" class="outer" align="center" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td width="100%">
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                        <tr>
                          <td>
                            <!--[if mso]>
    <center>
    <table><tr><td width="600">
  <![endif]-->
                                    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%; max-width:600px;" align="center">
                                      <tr>
                                        <td role="modules-container" style="padding:0px 0px 0px 0px; color:#000000; text-align:left;" bgcolor="#FFFFFF" width="100%" align="left"><table class="module preheader preheader-hide" role="module" data-type="preheader" border="0" cellpadding="0" cellspacing="0" width="100%" style="display: none !important; mso-hide: all; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;">
    <tr>
      <td role="module-content">
        <p></p>
      </td>
    </tr>
  </table><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="69c372e2-4fac-45b3-bc59-a7faa20f990e">
    <tbody>
      <tr>
        <td style="font-size:6px; line-height:10px; padding:0px 0px 10px 0px;" valign="top" align="center">
          <img class="max-width" border="0" style="display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px; max-width:30% !important; width:30%; height:auto !important;" width="180" alt="" data-proportionally-constrained="true" data-responsive="true" src="http://cdn.mcauto-images-production.sendgrid.net/ed257f64f269b1fa/2776161a-b3be-4f6c-969a-ce390dce8a67/200x200.png">
        </td>
      </tr>
    </tbody>
  </table><table class="module" role="module" data-type="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="0dba0ac9-16a4-48ff-ab69-8a5d1e828c10">
    <tbody>
      <tr>
        <td style="padding:0px 0px 0px 0px;" role="module-content" height="100%" valign="top" bgcolor="">
          <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" height="10px" style="line-height:10px; font-size:10px;">
            <tbody>
              <tr>
                <td style="padding:0px 0px 10px 0px;" bgcolor="#000000"></td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="b764f096-3331-496c-9c08-b7094341947f" data-mc-module-version="2019-10-22">
    <tbody>
      <tr>
        <td style="padding:28px 0px 18px 0px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit; text-align: center"><span style="font-size: 24px; font-family: helvetica, sans-serif">Welcome to the Family</span></div>
<div style="font-family: inherit; text-align: left"><br></div>
<div style="font-family: inherit; text-align: left"><span style="font-family: helvetica, sans-serif; font-size: 14px">Your account has been activated. We are glad you've joining and being a part of us now </span><span style="color: #e8e7e3; font-family: &quot;apple color emoji&quot;, &quot;segoe ui emoji&quot;, &quot;noto color emoji&quot;, &quot;android emoji&quot;, emojisymbols, &quot;emojione mozilla&quot;, &quot;twemoji mozilla&quot;, &quot;segoe ui symbol&quot;; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline; background-color: rgb(255, 255, 255)">😊</span><span style="font-family: &quot;apple color emoji&quot;, &quot;segoe ui emoji&quot;, &quot;noto color emoji&quot;, &quot;android emoji&quot;, emojisymbols, &quot;emojione mozilla&quot;, &quot;twemoji mozilla&quot;, &quot;segoe ui symbol&quot;; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline; background-color: rgb(255, 255, 255); color: #000000">.&nbsp;</span></div>
<div style="font-family: inherit; text-align: center"><span style="font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline; background-color: rgb(255, 255, 255); color: #000000; font-size: 14px; font-family: helvetica, sans-serif">The concept is simple: Learn help and explore.</span></div><div></div></div></td>
      </tr>
    </tbody>
  </table><table border="0" cellpadding="0" cellspacing="0" class="module" data-role="module-button" data-type="button" role="module" style="table-layout:fixed;" width="100%" data-muid="68b5b8bb-8342-492c-8a1d-704fa5181a01">
      <tbody>
        <tr>
          <td align="center" bgcolor="" class="outer-td" style="padding:10px 0px 10px 0px;">
            <table border="0" cellpadding="0" cellspacing="0" class="wrapper-mobile" style="text-align:center;">
              <tbody>
                <tr>
                <td align="center" bgcolor="#333333" class="inner-td" style="border-radius:6px; font-size:16px; text-align:center; background-color:inherit;">
                  <a href="https://bbrains.herokuapp.com/" style="background-color:#333333; border:1px solid #333333; border-color:#333333; border-radius:6px; border-width:1px; color:#ffffff; display:inline-block; font-size:14px; font-weight:normal; letter-spacing:0px; line-height:normal; padding:10px 18px 12px 18px; text-align:center; text-decoration:none; border-style:solid; font-family:verdana,geneva,sans-serif;" target="_blank">Visit Big Brains</a>
                </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table><table class="module" role="module" data-type="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="9984bcd7-dcab-40e9-8bf7-8db22fcdce56">
    <tbody>
      <tr>
        <td style="padding:0px 0px 0px 0px;" role="module-content" height="100%" valign="top" bgcolor="">
          <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" height="10px" style="line-height:10px; font-size:10px;">
            <tbody>
              <tr>
                <td style="padding:0px 0px 10px 0px;" bgcolor="#000000"></td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table><table class="module" role="module" data-type="social" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="3d3d4830-d1c7-43aa-a60e-082f039310a1">
    <tbody>
      <tr>
        <td valign="top" style="padding:10px 0px 10px 0px; font-size:6px; line-height:10px;" align="center">
          <table align="center" style="-webkit-margin-start:auto;-webkit-margin-end:auto;">
            <tbody><tr align="center"><td style="padding: 0px 5px;" class="social-icon-column">
      <a role="social-icon-link" href="https://www.facebook.com/m.abdullahmujahid/" target="_blank" alt="Facebook" title="Facebook" style="display:inline-block; background-color:#3B579D; height:21px; width:21px;">
        <img role="social-icon" alt="Facebook" title="Facebook" src="https://mc.sendgrid.com/assets/social/white/facebook.png" style="height:21px; width:21px;" height="21" width="21">
      </a>
    </td><td style="padding: 0px 5px;" class="social-icon-column">
      <a role="social-icon-link" href="https://twitter.com/abdulladgaf" target="_blank" alt="Twitter" title="Twitter" style="display:inline-block; background-color:#7AC4F7; height:21px; width:21px;">
        <img role="social-icon" alt="Twitter" title="Twitter" src="https://mc.sendgrid.com/assets/social/white/twitter.png" style="height:21px; width:21px;" height="21" width="21">
      </a>
    </td><td style="padding: 0px 5px;" class="social-icon-column">
      <a role="social-icon-link" href="http://instagra.com/abdullahmujahidali" target="_blank" alt="Instagram" title="Instagram" style="display:inline-block; background-color:#7F4B30; height:21px; width:21px;">
        <img role="social-icon" alt="Instagram" title="Instagram" src="https://mc.sendgrid.com/assets/social/white/instagram.png" style="height:21px; width:21px;" height="21" width="21">
      </a>
    </td><td style="padding: 0px 5px;" class="social-icon-column">
      <a role="social-icon-link" href="https://www.linkedin.com/in/abdullah-mujahid-211849186/" target="_blank" alt="LinkedIn" title="LinkedIn" style="display:inline-block; background-color:#0077B5; height:21px; width:21px;">
        <img role="social-icon" alt="LinkedIn" title="LinkedIn" src="https://mc.sendgrid.com/assets/social/white/linkedin.png" style="height:21px; width:21px;" height="21" width="21">
      </a>
    </td></tr></tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table><div data-role="module-unsubscribe" class="module" role="module" data-type="unsubscribe" style="color:#444444; font-size:12px; line-height:20px; padding:16px 16px 16px 16px; text-align:center;" data-muid="31ce879c-ae4f-47ac-8ca4-ab8747643431"><div class="Unsubscribe--addressLine"><p class="Unsubscribe--senderName" style="font-size:12px; line-height:20px;">{{Sender_Name}}</p><p style="font-size:12px; line-height:20px;"><span class="Unsubscribe--senderAddress">{{Sender_Address}}</span>, <span class="Unsubscribe--senderCity">{{Sender_City}}</span>, <span class="Unsubscribe--senderState">{{Sender_State}}</span> <span class="Unsubscribe--senderZip">{{Sender_Zip}}</span></p></div><p style="font-size:12px; line-height:20px;"><a class="Unsubscribe--unsubscribeLink" href="{{{unsubscribe}}}" target="_blank" style="">Unsubscribe</a> - <a href="{{{unsubscribe_preferences}}}" target="_blank" class="Unsubscribe--unsubscribePreferences" style="">Unsubscribe Preferences</a></p></div></td>
                                      </tr>
                                    </table>
                                    <!--[if mso]>
                                  </td>
                                </tr>
                              </table>
                            </center>
                            <![endif]-->
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </div>
      </center>
    </body>
  </html>`

const transporter = nodemailer.createTransport(sendgridTransport({
  auth: {
    api_key: SENDGRID_API
  }
}))
router.post("/signup", (req, res) => {
  const { name, email, password, country, organization, role, intro, pic } = req.body
  if (!email || !password || !name) {
    return res.status(422).json({ error: "Please add all the fields" })
  }
  User.findOne({ email: email })
    .then((savedUser) => {
      if (savedUser) {
        return res.status(422).json({ error: "User Already Exists" })
      }
      bcrypt.hash(password, 12)
        .then(hashedpassword => {
          const user = new User({
            email,
            password: hashedpassword,
            name,
            pic,
            country,
            organization,
            role,
            intro
          })
          user.save()
            .then(user => {
              // transporter.sendMail({
              //     to: user.email,
              //     from: "umtfyp2020@gmail.com",
              //     subject: "Sign up Success",
              //     html: htmlTemplate
              // })
              res.json({ message: user.name + ' joined BigBrains' })
            })
            .catch(err => {
              console.log(err)
            })
        })

    }).catch(err => {
      console.log(err)
    })
})

router.post("/signin", (req, res) => {
  const { email, password } = req.body
  if (!email) {
    return res.status(422).json({ error: "Please provide the email" })
  }
  else if (!password) {
    return res.status(422).json({ error: "Please provide the password" })
  }
  User.findOne({ email: email })
    .then(savedUser => {
      if (!savedUser) {
        return res.status(422).json({ error: "Invalid Email or Password" })
      }
      bcrypt.compare(password, savedUser.password)
        .then(doMatch => {
          if (doMatch) {
            //  res.json({message:"Sucessfully Logged In!"})
            const token = jwt.sign({ _id: savedUser._id }, JWT_SECRET)
            const { _id, name, email, following, follower, pic, country, organization, role, intro } = savedUser
            res.json({ token, user: { _id, name, email, following, follower, pic, country, organization, role, intro } })
          }
          else {
            return res.status(422).json({ error: "Invalid Email or Password" })
          }
        })
        .catch(err => {
          console.log(err)
        })
    })
})

router.post("/reset-password", (req, res) => {
  crypto.randomBytes(32, (err, buffer) => {
    if (err) {
      console.log(err)
    }
    const token = buffer.toString("hex")
    User.findOne({ email: req.body.email })
      .then(user => {
        if (!user) {
          return res.status(422).json({ error: "User doesn't exists" })
        }
        user.resetToken = token
        user.expireToken = Date.now() + 3600000
        user.save().then((result) => {
          transporter.sendMail({
            to: user.email,
            from: "umtfyp2020@gmail.com",
            subject: "Reset Password Request",
            html: `<p> You requested for reseet password  </p>
                    <h5>Click on the  <a href="${EMAIL}/reset/${token}">
                     link </a> to reset password</h5>
                    `
          })
          res.json({ message: "Check your email" })
        })
      })
  })
})



router.post("/new-password", (req, res) => {
  const newPassword = req.body.password
  const sentToken = req.body.token
  User.findOne({
    resetToken: sentToken, expireToken: { $gt: Date.now() }
  })
    .then(user => {
      if (!user) {
        return res.status(422).json({ error: "Try again session expired!" })
      }
      bcrypt.hash(newPassword, 12)
        .then(hashedpassword => {
          user.password = hashedpassword
          user.resetToken = undefined
          user.expireToken = undefined
          user.save()
            .then((savedUser) => {
              res.json({ message: "Password Sucessfully Updated" })
            })
        })
    })
    .catch(err => {
      console.log(err)
    })
})

module.exports = router