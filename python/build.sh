python manage.py collectstatic --no-input  
    && python manage.py migrate  
    && gunicorn _core.wsgi --log-level debug