export const sendToken = (res, user, message, statusCode = 200) => {
  const token = user.getJWTToken();

  const options = {
    // token expires in 15 days
    expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
    httpOnly: true,
    // secure: true, --dont use it on localhost--
    sameSite: true,
  };
// sending token wrapped with token and security options and statuscode
  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    message,
    user,
  });
};
// we have generated a token, now send it to client /browser through models/collections.