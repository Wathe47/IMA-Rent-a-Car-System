import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Car, Users, FileText, TrendingUp } from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Cars",
      value: "24",
      icon: Car,
      change: "+2 this month"
    },
    {
      title: "Active Suppliers", 
      value: "8",
      icon: Users,
      change: "+1 this month"
    },
    {
      title: "Active Rentals",
      value: "15",
      icon: FileText,
      change: "+5 this week"
    },
    {
      title: "Monthly Revenue",
      value: "₹2,50,000",
      icon: TrendingUp,
      change: "+12% from last month"
    }
  ];

  return (
    <section className="py-12 bg-background">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">IMA Traders Dashboard</h1>
            <p className="text-muted-foreground">Manage your car rental business operations</p>
          </div>
          <div className="flex gap-3">
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Add Car
            </Button>
            <Button variant="outline">
              <Plus className="w-4 h-4 mr-2" />
              Add Supplier
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-card-gradient border-border/50 hover:shadow-card transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <stat.icon className="h-5 w-5 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.change}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 bg-card-gradient border-border/50">
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-accent/10 rounded-lg">
                  <div>
                    <p className="font-medium">New car added: Honda City</p>
                    <p className="text-sm text-muted-foreground">From supplier: City Motors</p>
                  </div>
                  <span className="text-xs text-muted-foreground">2 hours ago</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-accent/10 rounded-lg">
                  <div>
                    <p className="font-medium">Rental completed: Toyota Innova</p>
                    <p className="text-sm text-muted-foreground">Rented to: ABC Company</p>
                  </div>
                  <span className="text-xs text-muted-foreground">5 hours ago</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-accent/10 rounded-lg">
                  <div>
                    <p className="font-medium">New supplier registered</p>
                    <p className="text-sm text-muted-foreground">Elite Car Services</p>
                  </div>
                  <span className="text-xs text-muted-foreground">1 day ago</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card-gradient border-border/50">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start">
                <Plus className="w-4 h-4 mr-2" />
                New Rental
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Car className="w-4 h-4 mr-2" />
                Manage Cars
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Users className="w-4 h-4 mr-2" />
                Manage Suppliers
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <FileText className="w-4 h-4 mr-2" />
                View Reports
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;