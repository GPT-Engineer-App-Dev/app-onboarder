import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center">
        <h1 className="text-5xl font-bold mb-4">Revolutionize Your Workflow</h1>
        <p className="text-xl mb-8">Our SaaS solution helps you streamline your business processes</p>
        <div className="space-x-4">
          <Button variant="primary" size="lg">Get Started</Button>
          <Button variant="secondary" size="lg">Learn More</Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Features</h2>
        <p className="text-lg mb-12">Everything you need to boost your productivity</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Feature One</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Brief description of feature one.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feature Two</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Brief description of feature two.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feature Three</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Brief description of feature three.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Pricing Plans</h2>
        <p className="text-lg mb-12">Choose a plan that fits your needs</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Basic</CardTitle>
            </CardHeader>
            <CardContent>
              <p>$10/month</p>
              <Button variant="primary">Select Plan</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Pro</CardTitle>
            </CardHeader>
            <CardContent>
              <p>$30/month</p>
              <Button variant="primary">Select Plan</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Enterprise</CardTitle>
            </CardHeader>
            <CardContent>
              <p>$50/month</p>
              <Button variant="primary">Select Plan</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <div className="flex flex-col items-center">
                <Avatar src="https://placehold.co/100x100" alt="Customer 1" />
                <p className="mt-4">"This product is amazing!"</p>
                <Badge>Customer 1</Badge>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex flex-col items-center">
                <Avatar src="https://placehold.co/100x100" alt="Customer 2" />
                <p className="mt-4">"It has revolutionized the way we work."</p>
                <Badge>Customer 2</Badge>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex flex-col items-center">
                <Avatar src="https://placehold.co/100x100" alt="Customer 3" />
                <p className="mt-4">"Highly recommend to everyone."</p>
                <Badge>Customer 3</Badge>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </section>

      {/* Footer Section */}
      <footer className="container mx-auto text-center py-8">
        <Separator className="mb-4" />
        <div className="flex justify-center space-x-4 mb-4">
          <a href="/privacy-policy" className="text-muted-foreground hover:text-foreground">Privacy Policy</a>
          <a href="/terms-of-service" className="text-muted-foreground hover:text-foreground">Terms of Service</a>
        </div>
        <p className="text-muted-foreground">&copy; 2023 SaaS Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;