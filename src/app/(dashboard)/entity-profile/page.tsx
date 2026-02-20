import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building2, Globe, Phone, MapPin, Clock, Utensils } from "lucide-react";

export default function EntityProfilePage() {
  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Entity Profile</h1>
        <p className="text-slate-400 mt-2">
          Define your canonical business information - the source of truth
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Column - Profile Summary */}
        <Card className="lg:sticky lg:top-24 h-fit">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg">Profile Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] text-2xl font-bold text-white mx-auto shadow-lg shadow-purple-500/20">
              CR
            </div>
            <div className="text-center">
              <h3 className="font-bold text-lg">Canal Restaurant</h3>
              <p className="text-sm text-slate-400 mt-1">Lebanese Cuisine</p>
              <Badge variant="success" className="mt-2 text-xs">Active</Badge>
            </div>
            
            <div className="space-y-3 pt-4 border-t border-slate-800">
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Profile Completeness</span>
                <span className="font-semibold text-emerald-400">85%</span>
              </div>
              <div className="h-2.5 rounded-full bg-slate-800 overflow-hidden">
                <div className="h-full w-[85%] bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] rounded-full shadow-lg shadow-purple-500/30"></div>
              </div>
              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-xs">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                  <span className="text-slate-400">12 fields completed</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <div className="h-1.5 w-1.5 rounded-full bg-amber-500"></div>
                  <span className="text-slate-400">2 fields need attention</span>
                </div>
              </div>
            </div>

            <div className="space-y-2 pt-4 border-t border-slate-800">
              <p className="text-xs font-medium text-slate-400 uppercase tracking-wide">Quick Stats</p>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Sources Synced</span>
                  <span className="font-semibold">4/6</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Last Updated</span>
                  <span className="font-semibold">2 hours ago</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Right Column - Forms */}
        <div className="lg:col-span-3 space-y-4">
          <Card>
            <CardHeader className="pb-4">
              <div className="flex items-center gap-2">
                <Building2 className="h-5 w-5 text-purple-400" />
                <CardTitle className="text-lg">Basic Information</CardTitle>
              </div>
              <p className="text-xs text-slate-400 mt-1">Core business identity and branding</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input label="Business Name" defaultValue="Canal Restaurant" required />
                <Input label="Business Type" defaultValue="Lebanese Restaurant" />
              </div>
              <Input 
                label="Brand Variants" 
                placeholder="e.g., Canal, Canal Rest, Canal Lebanese" 
                helperText="Alternative names your business is known by"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input 
                  label="Website URL" 
                  defaultValue="https://canalrestaurant.com" 
                  icon={<Globe className="h-4 w-4" />}
                />
                <Input label="Industry Category" defaultValue="Food & Dining" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-4">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-purple-400" />
                <CardTitle className="text-lg">Location & Contact</CardTitle>
              </div>
              <p className="text-xs text-slate-400 mt-1">Physical address and contact details</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input 
                label="Street Address" 
                defaultValue="123 Main Street" 
                icon={<MapPin className="h-4 w-4" />}
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Input label="City" defaultValue="New York" />
                <Input label="State/Province" defaultValue="NY" />
                <Input label="ZIP Code" defaultValue="10001" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input 
                  label="Phone Number" 
                  defaultValue="+1 (555) 123-4567" 
                  icon={<Phone className="h-4 w-4" />}
                  helperText="Consistent format across all platforms"
                />
                <Input label="Email" defaultValue="info@canalrestaurant.com" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-4">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-purple-400" />
                <CardTitle className="text-lg">Operating Hours</CardTitle>
              </div>
              <p className="text-xs text-slate-400 mt-1">Regular business hours - ensure accuracy for AI models</p>
            </CardHeader>
            <CardContent className="space-y-3">
              {daysOfWeek.map((day) => (
                <div key={day} className="grid grid-cols-6 gap-3 items-center">
                  <span className="text-sm font-medium text-slate-300 col-span-2">{day}</span>
                  <Input placeholder="9:00 AM" size={1} className="col-span-2" />
                  <Input placeholder="10:00 PM" size={1} className="col-span-2" />
                </div>
              ))}
              <div className="pt-2">
                <label className="flex items-center gap-2 text-sm text-slate-400 cursor-pointer">
                  <input type="checkbox" className="rounded border-slate-600 bg-slate-800" />
                  <span>Apply same hours to all days</span>
                </label>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-4">
              <div className="flex items-center gap-2">
                <Utensils className="h-5 w-5 text-purple-400" />
                <CardTitle className="text-lg">Services & Menu</CardTitle>
              </div>
              <p className="text-xs text-slate-400 mt-1">Key offerings and specialties</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-slate-300 mb-2 block">Cuisine Types</label>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="default" className="cursor-pointer">Lebanese</Badge>
                  <Badge variant="default" className="cursor-pointer">Mediterranean</Badge>
                  <Badge variant="default" className="cursor-pointer">Middle Eastern</Badge>
                  <button className="text-xs text-purple-400 hover:text-purple-300">+ Add more</button>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-300 mb-2 block">Signature Dishes</label>
                <Input placeholder="e.g., Lamb Shawarma, Hummus, Falafel" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-slate-300 mb-2 block">Price Range</label>
                  <select className="w-full rounded-xl bg-slate-800 px-4 py-3 text-sm border border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500">
                    <option>$$ (Moderate)</option>
                    <option>$ (Budget)</option>
                    <option>$$$ (Upscale)</option>
                    <option>$$$$ (Fine Dining)</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-300 mb-2 block">Atmosphere</label>
                  <select className="w-full rounded-xl bg-slate-800 px-4 py-3 text-sm border border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500">
                    <option>Casual</option>
                    <option>Fine Dining</option>
                    <option>Family-Friendly</option>
                    <option>Romantic</option>
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end gap-3 pt-2">
            <Button variant="secondary" size="lg">Cancel Changes</Button>
            <Button variant="primary" size="lg" className="shadow-lg shadow-purple-500/30">
              Save Entity Profile
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
