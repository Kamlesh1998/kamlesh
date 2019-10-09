from django.db import models

# Create your models here.
class admin(models.Model):
    email = models.EmailField(unique= True)
    password = models.CharField(max_length = 20)
    otp = models.IntegerField(default = 459)
    is_active = models.BooleanField(default=True)
    is_verfied = models.BooleanField(default=False)
    role = models.CharField(max_length = 10)
    created_at= models.DateTimeField(auto_now_add=True,blank=False)
    updated_at = models.DateTimeField(auto_now = True, blank=False)

    
    def __str__(self):
        return self.role
    

class captain(models.Model):
    user_id = models.ForeignKey(User, on_delete = models.CASCADE)
    firstname = models.CharField(max_length=50)
    lastname = models.CharField(max_length=50)
    qualification = models.CharField(max_length=100, blank= True)
    speciality = models.CharField(max_length = 100)
    mobile = models.CharField(max_length = 10)
    address = models.CharField(max_length= 500, blank= True)
    city = models.CharField(max_length = 50)
    state = models.CharField(max_length = 50, blank= True)
    gender = models.CharField(max_length= 10)
    birthdate = models.DateField()
    location = models.CharField(max_length= 30, blank= True)
    profile_pic=models.ImageField(upload_to='img/',default='doc_male.png')

    
    def __str__(self):
        return self.firstname

class customer(models.Model):
    user_id = models.ForeignKey(User, on_delete = models.CASCADE)
    firstname = models.CharField(max_length=50)
    lastname = models.CharField(max_length=50)
    mobile = models.CharField(max_length = 10)
    address = models.CharField(max_length= 500, blank = True)
    city = models.CharField(max_length = 50)
    state = models.CharField(max_length = 50, blank = True)
    location = models.CharField(max_length= 30, blank= True)
    gender = models.CharField(max_length= 10)
    birthdate = models.DateField()
    profile_pic=models.FileField(upload_to='app/img/',default='patient_icon.png')

    
    def __str__(self):
        return self.firstname