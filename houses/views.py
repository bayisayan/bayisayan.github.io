from django.shortcuts import render, get_object_or_404
from .models import House

# Create your views here.
def houses_list(request):
    houses = House.objects.all()
    return render(request,"houses_list.html",{"houses": houses})

def house_detail(request, house_id):
    house = get_object_or_404(House, id = house_id)
    return render (request, "houses_detail.html", {"house": house})