// const server = {
//   host: serInfo[2], // 服务器ip
//   port: '22', // 端口一般默认22
//   username: serInfo[3] || 'root', // 用户名
//   password: serInfo[4] || 'root', // 密码
//   pathNmae: '', // 上传到服务器的位置
//   locaPath: './dist/' // 本地打包文件的位置
// }

const server = {
	platformName: '视频去水印',
	host: '115.190.139.52',
	port: 22,
	username: 'root',
	password: 'yanmiao123@',
	pathNmae: '/www/wwwroot/fund.funjs.top/',
	locaPath: './dist/', // 本地打包文件的位置
};

// 引入scp2
const client = require('scp2');
const ora = require('ora');
const spinner = ora('正在发布到服务器...');

const Client = require('ssh2').Client;
const conn = new Client();

console.log('正在建立连接');
conn
	.on('ready', () => {
		console.log('已连接');
		if (!server.pathNmae) {
			console.log('连接已关闭');
			conn.end();
			return false;
		}

		console.log('开始上传');
		spinner.start();
		client.scp(
			server.locaPath,
			{
				host: server.host,
				port: server.port,
				username: server.username,
				password: server.password,
				path: server.pathNmae,
			},
			(err) => {
				spinner.stop();
				if (!err) {
					console.log('项目发布完毕');
				} else {
					console.log('err', err);
				}
				conn.end();
			}
		);
	})
	.connect({
		host: server.host,
		port: server.port,
		username: server.username,
		password: server.password,
		// privateKey: '' // 私秘钥
	});
