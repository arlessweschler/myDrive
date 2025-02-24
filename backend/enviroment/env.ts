export default {
  key: process.env.KEY,
  newKey: process.env.NEW_KEY,
  passwordAccess: process.env.PASSWORD_ACCESS,
  passwordRefresh: process.env.PASSWORD_REFRESH,
  passwordCookie: process.env.PASSWORD_COOKIE,
  createAcctBlocked: process.env.BLOCK_CREATE_ACCOUNT,
  root: process.env.ROOT,
  url: process.env.URL,
  mongoURL: process.env.MONGODB_URL,
  dbType: process.env.DB_TYPE,
  fsDirectory: process.env.FS_DIRECTORY,
  s3ID: process.env.S3_ID,
  s3Key: process.env.S3_KEY,
  s3Bucket: process.env.S3_BUCKET,
  useDocumentDB: process.env.USE_DOCUMENT_DB,
  documentDBBundle: process.env.DOCUMENT_DB_BUNDLE,
  sendgridKey: process.env.SENDGRID_KEY,
  sendgridEmail: process.env.SENDGRID_EMAIL,
  remoteURL: process.env.REMOTE_URL,
  secureCookies: process.env.SECURE_COOKIES,
  tempDirectory: process.env.TEMP_DIRECTORY,
  emailVerification: process.env.EMAIL_VERIFICATION,
  emailDomain: process.env.EMAIL_DOMAIN,
  emailAPIKey: process.env.EMAIL_API_KEY,
  emailHost: process.env.EMAIL_HOST,
  emailPort: process.env.EMAIL_PORT,
  emailAddress: process.env.EMAIL_ADDRESS,
  videoThumbnailsEnabled: process.env.VIDEO_THUMBNAILS_ENABLED === "true",
  tempVideoThumbnailLimit: process.env.TEMP_VIDEO_THUMBNAIL_LIMIT
    ? +process.env.TEMP_VIDEO_THUMBNAIL_LIMIT
    : 0,
  docker: process.env.DOCKER === "true",
};

module.exports = {
  key: process.env.KEY,
  newKey: process.env.NEW_KEY,
  passwordAccess: process.env.PASSWORD_ACCESS,
  passwordRefresh: process.env.PASSWORD_REFRESH,
  passwordCookie: process.env.PASSWORD_COOKIE,
  createAcctBlocked: process.env.BLOCK_CREATE_ACCOUNT,
  root: process.env.ROOT,
  url: process.env.URL,
  mongoURL: process.env.MONGODB_URL,
  dbType: process.env.DB_TYPE,
  fsDirectory: process.env.FS_DIRECTORY,
  s3ID: process.env.S3_ID,
  s3Key: process.env.S3_KEY,
  s3Bucket: process.env.S3_BUCKET,
  useDocumentDB: process.env.USE_DOCUMENT_DB,
  documentDBBundle: process.env.DOCUMENT_DB_BUNDLE,
  sendgridKey: process.env.SENDGRID_KEY,
  sendgridEmail: process.env.SENDGRID_EMAIL,
  remoteURL: process.env.REMOTE_URL,
  secureCookies: process.env.SECURE_COOKIES,
  tempDirectory: process.env.TEMP_DIRECTORY,
  emailVerification: process.env.EMAIL_VERIFICATION,
  emailDomain: process.env.EMAIL_DOMAIN,
  emailAPIKey: process.env.EMAIL_API_KEY,
  emailHost: process.env.EMAIL_HOST,
  emailPort: process.env.EMAIL_PORT,
  emailAddress: process.env.EMAIL_ADDRESS,
  videoThumbnailsEnabled: process.env.VIDEO_THUMBNAILS_ENABLED === "true",
  tempVideoThumbnailLimit: process.env.TEMP_VIDEO_THUMBNAIL_LIMIT
    ? +process.env.TEMP_VIDEO_THUMBNAIL_LIMIT
    : 0,
  docker: process.env.DOCKER === "true",
};
