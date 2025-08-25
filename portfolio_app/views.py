from django.shortcuts import render
from django.http import HttpResponse, Http404
from django.conf import settings
import os


def portfolio_view(request):
    """Main portfolio view with all data"""
    
    projects = [
        {
            'title': 'Medical Image Segmentation (Python) ',
            'description': 'A web application that segments medical images using deep learning techniques.',
            'tech': ['Python', 'Flutter', 'TensorFlow', 'Docker'],
            'github_url': 'https://github.com/sheikh-ehtisham/cv-security-system',
        },
        {
            'title': 'Audio Classification using Al (Python)',
            'description': 'A web application that classifies audio files into different categories using machine learning.',
            'tech': ['Python', 'Flask', 'TensorFlow', 'Docker'],
            'github_url': 'https://github.com/sheikh-ehtisham/cv-security-system',
        },
        {
            'title': 'Autonomous Line Following Robot (Arduino)',
            'description': 'Aline following robot using Arduino and IR sensors for navigation.',
            'tech': ['Arduino', 'C++', 'IR Sensors'],
            'github_url': 'https://github.com/sheikh-ehtisham/ai-analytics-dashboard',
        },
        {
            'title': 'Autonomous Obstacle Detector Robot (Arduino)',
            'description': 'Obstacle detection robot using ultrasonic sensors and Arduino for navigation.',
            'tech': ['Arduino', 'C++', 'Ultrasonic Sensors'],
            'github_url': 'https://github.com/sheikh-ehtisham/smart-iot-home',
        },
        {
            'title': 'Automatic Gas Detector (Micro-controller in C)',
            'description': 'Gas leak detection system using MQ-2 sensor and micro-controller programming in C.',
            'tech': ['OpenCV', 'PyTorch', 'FastAPI', 'Docker'],
            'github_url': 'https://github.com/sheikh-ehtisham/cv-security-system',
        },
    ]
    
    achievements = [
        {
            'title': 'Circuit Implementation on Basic Platform workshop',
            'description': 'Organized Circuit Implementation on Basic Platform workshop with the help of IET students clubs cui Abbottabad. ',
            'year': '2021',
            'icon': 'award',
        },
        {
            'title': 'Python for Everyone',
            'description': 'organized two days workshop on “Python for Everyone” conducted by IEEE student branch CUI Abbottabad',
            'year': '2021',
            'icon': 'award',
        },
        {
            'title': 'Robo-Maker’s Workshop',
            'description': 'Serve as a presenter in two days hands-on workshop on “Robo-Maker’s” organized by IET students clubs cui Abbottabad.',
            'year': '2021',
            'icon': 'award',
        },
        {
            'title': 'Best Engineering Project',
            'description': 'University-wide recognition for innovative IoT solution',
            'year': '2023',
            'icon': 'rocket',
        },
        {
            'title': 'Outstanding and Valued Certification',
            'description': 'Receive "Outstanding and Valued" certification from IET UK for organizing workshops and events',
            'year': '2020-2024',
            'icon': 'brain',
        },

    ]
    
    experiences = [
        {
            'title': 'IT Engineer',
            'company': 'Frix Surgicals Pvt. Ltd.',
            'period': '2025 - Present',
            'location': 'Onsite',
            'description': 'Leading IT operations and infrastructure management for a medical device company.',
        },
        {
            'title': 'Software Developer',
            'company': 'MegaTech Solutions',
            'period': '2024 - Current',
            'location': 'Remote',
            'description': 'Developed full-stack applications and implemented AI-powered features.',
        },
    ]
    
    context = {
        'projects': projects,
        'achievements': achievements,
        'experiences': experiences,
        'whatsapp_url': 'https://wa.me/+923227407760',  # Replace with actual number
        'linkedin_url': 'https://linkedin.com/in/eng-ehtaysham-ur-rehman-996b90231',  # Replace with actual profile
        'github_url': 'https://github.com/ihtishamshami',  # Replace with actual profile
    }
    
    return render(request, 'portfolio/index.html', context)


def download_resume(request):
    """Handle resume download"""
    file_path = os.path.join(settings.MEDIA_ROOT, 'Ehtaysham_Resume.pdf')
    
    if os.path.exists(file_path):
        with open(file_path, 'rb') as fh:
            response = HttpResponse(fh.read(), content_type="application/pdf")
            response['Content-Disposition'] = 'attachment; filename="Sheikh_Ehtisham_Resume.pdf"'
            return response
    
    raise Http404("Resume file not found")
