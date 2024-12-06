Python 3.12.7 (tags/v3.12.7:0b05ead, Oct  1 2024, 03:06:41) [MSC v.1941 64 bit (AMD64)] on win32
Type "help", "copyright", "credits" or "license()" for more information.
>>> import http.server
... import socketserver
... 
... class MyHandler(http.server.SimpleHTTPRequestHandler):
...     def end_headers(self):
...         self.send_header('Access-Control-Allow-Origin', '*')  # 모든 도메인에서 접근 허용
...         super().end_headers()
... 
... PORT = 8000
... 
... Handler = MyHandler
... with socketserver.TCPServer(("", PORT), Handler) as httpd:
...     print(f"Serving at port {PORT}")
