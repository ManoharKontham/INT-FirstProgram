from django.shortcuts import render

def slideshow(request):
    return render(request,'index.html')