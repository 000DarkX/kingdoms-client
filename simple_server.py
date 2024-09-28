from http.server import SimpleHTTPRequestHandler, HTTPServer
import mimetypes

# Add .mjs MIME type
mimetypes.init()
mimetypes.add_type('application/javascript', '.mjs')
print(mimetypes.types_map[".mjs"])

class CustomHTTPRequestHandler(SimpleHTTPRequestHandler):
    extensions_map = SimpleHTTPRequestHandler.extensions_map.copy()
    extensions_map.update(
        {
            ".mjs": "application/javascript",
        }
    )

    def end_headers(self):
        self.send_header('Cache-Control', 'no-store')
        super().end_headers()
# Define the server address and port
server_address = ('', 8000)  # '' means all available interfaces, port 8000

Handler = CustomHTTPRequestHandler

# Create the HTTP server
httpd = HTTPServer(server_address, Handler)

print("Starting server on port 8000...")
httpd.serve_forever()
