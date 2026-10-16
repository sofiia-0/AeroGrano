// Servidor local mínimo con Node.js, sin dependencias y sin Laravel.
const http=require('http'),fs=require('fs'),path=require('path');
const root=__dirname,port=4173;
const types={'.html':'text/html; charset=utf-8','.js':'application/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.json':'application/json; charset=utf-8'};
http.createServer((req,res)=>{
 const url=new URL(req.url,'http://localhost');
 const requested=path.resolve(root,'.'+decodeURIComponent(url.pathname==='/'?'/index.html':url.pathname));
 if(!requested.startsWith(root+path.sep)&&requested!==root){res.writeHead(403).end();return;}
 fs.readFile(requested,(err,data)=>{if(err){res.writeHead(404).end('Archivo no encontrado');return}res.writeHead(200,{'Content-Type':types[path.extname(requested)]||'application/octet-stream','Cache-Control':'no-store'});res.end(data)});
}).listen(port,'127.0.0.1',()=>console.log(`\nAeroGrano Rural listo en http://localhost:${port}\nPresiona Ctrl+C para detener el servidor.\n`));
