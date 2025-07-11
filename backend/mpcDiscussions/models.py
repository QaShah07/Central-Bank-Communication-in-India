from django.db import models

class MPCDiscussion(models.Model):
    MEMBER_TYPE_CHOICES = [
        ('internal', 'Internal'),
        ('external', 'External'),
    ]
    
    month_year = models.CharField(
        max_length=20, 
        help_text="Format: 'Oct 2016', 'Jan 2017', etc."
    )
    name = models.CharField(max_length=100, help_text="MPC Member name")
    member_type = models.CharField(
        max_length=10, 
        choices=MEMBER_TYPE_CHOICES,
        help_text="Internal or External member"
    )
    
    # Inflation data
    inflation_actual = models.CharField(max_length=50, help_text="Actual inflation value")
    inflation_predicted = models.CharField(max_length=50, help_text="Predicted inflation value")
    inflation_error = models.CharField(max_length=50, help_text="Inflation error value")
    
    # Growth data
    growth_actual = models.CharField(max_length=50, help_text="Actual growth value")
    growth_predicted = models.CharField(max_length=50, help_text="Predicted growth value")
    growth_error = models.CharField(max_length=50, help_text="Growth error value")
    
    # GDP data
    gdp_actual = models.CharField(max_length=50, help_text="Actual GDP value")
    gdp_predicted = models.CharField(max_length=50, help_text="Predicted GDP value")
    gdp_error = models.CharField(max_length=50, help_text="GDP error value")
    
    # Analysis score for correlation plot
    analysis_score = models.FloatField(
        help_text="Analysis score for correlation plotting",
        default=0.0
    )
    
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['month_year', 'name']
        verbose_name = "MPC Discussion"
        verbose_name_plural = "MPC Discussions"
    
    def __str__(self):
        return f"{self.name} - {self.month_year} ({self.member_type})"
    
    @property
    def year(self):
        """Extract year from month_year string"""
        try:
            return int(self.month_year.split()[-1])
        except:
            return None
    
    @property
    def month(self):
        """Extract month from month_year string"""
        try:
            return self.month_year.split()[0]
        except:
            return None