from flask import Flask 
from routes.routes import pages
import os

app = Flask(__name__)
app.register_blueprint(pages)

if __name__ == "__main__":
    app.run(debug=True)