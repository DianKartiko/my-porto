from flask import Blueprint, render_template, abort, render_template_string
from jinja2 import TemplateNotFound
import os 

pages = Blueprint('pages', __name__)

@pages.route('/')
def index():
    try: 
        template_path = os.path.join(os.path.dirname(__file__), "..", 'templates', 'index.html')
        if not os.path.exists(template_path):
            return render_template_string(f"Template not found at: {template_path}", 404)
        else : 
            return render_template('index.html')
    except TemplateNotFound:
        abort(404)