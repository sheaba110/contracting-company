from django import forms
from .models import ConsultationReques

class ConsultationForm(forms.ModelForm):
    class Meta:
        model = ConsultationReques
        fields = '__all__'
        widget = {
            'preferred_date': forms.DateInput(attrs={'type':'date'})
        }