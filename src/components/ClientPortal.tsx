
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  ArrowLeft, 
  Plus, 
  Brain, 
  CheckCircle, 
  TrendingUp, 
  Leaf,
  Package,
  Award,
  History,
  ShoppingCart,
  AlertTriangle
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface ClientPortalProps {
  onBack: () => void;
}

const ClientPortal: React.FC<ClientPortalProps> = ({ onBack }) => {
  const [wasteForm, setWasteForm] = useState({
    product: '',
    quantity: '',
    category: '',
    reason: ''
  });

  const handleWasteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Waste Event Logged",
      description: "AI recommendation generated successfully!",
    });
    setWasteForm({ product: '', quantity: '', category: '', reason: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900">
      {/* Header */}
      <div className="bg-white/5 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                onClick={onBack}
                className="text-white hover:bg-white/10"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Home
              </Button>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white">GreenLedger Client</h1>
                  <p className="text-sm text-slate-300">Sustainable Store Management</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30">
                Store ID: ST-001
              </Badge>
              <div className="text-right">
                <div className="text-sm text-slate-300">Sustainability Score</div>
                <div className="text-lg font-bold text-emerald-400">87%</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <Tabs defaultValue="log-waste" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 bg-white/5 backdrop-blur-xl border border-white/10">
            <TabsTrigger value="log-waste" className="data-[state=active]:bg-emerald-500/20 data-[state=active]:text-emerald-300">
              Log Waste
            </TabsTrigger>
            <TabsTrigger value="history" className="data-[state=active]:bg-emerald-500/20 data-[state=active]:text-emerald-300">
              History
            </TabsTrigger>
            <TabsTrigger value="products" className="data-[state=active]:bg-emerald-500/20 data-[state=active]:text-emerald-300">
              Sustainable Products
            </TabsTrigger>
            <TabsTrigger value="leaderboard" className="data-[state=active]:bg-emerald-500/20 data-[state=active]:text-emerald-300">
              Leaderboard
            </TabsTrigger>
          </TabsList>

          {/* Log Waste Tab */}
          <TabsContent value="log-waste">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Waste Logging Form */}
              <Card className="bg-white/5 backdrop-blur-xl border-white/10">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Plus className="w-5 h-5 mr-2 text-emerald-400" />
                    Log New Waste Event
                  </CardTitle>
                  <CardDescription className="text-slate-300">
                    Record waste events to receive AI-powered recommendations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleWasteSubmit} className="space-y-4">
                    <div>
                      <Label className="text-white">Product Name</Label>
                      <Input 
                        value={wasteForm.product}
                        onChange={(e) => setWasteForm({...wasteForm, product: e.target.value})}
                        placeholder="e.g., Milk cartons"
                        className="bg-white/10 border-white/20 text-white placeholder-slate-400"
                      />
                    </div>
                    <div>
                      <Label className="text-white">Quantity</Label>
                      <Input 
                        type="number"
                        value={wasteForm.quantity}
                        onChange={(e) => setWasteForm({...wasteForm, quantity: e.target.value})}
                        placeholder="e.g., 5"
                        className="bg-white/10 border-white/20 text-white placeholder-slate-400"
                      />
                    </div>
                    <div>
                      <Label className="text-white">Category</Label>
                      <Select value={wasteForm.category} onValueChange={(value) => setWasteForm({...wasteForm, category: value})}>
                        <SelectTrigger className="bg-white/10 border-white/20 text-white">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dairy">Dairy Products</SelectItem>
                          <SelectItem value="produce">Fresh Produce</SelectItem>
                          <SelectItem value="bakery">Bakery Items</SelectItem>
                          <SelectItem value="meat">Meat & Seafood</SelectItem>
                          <SelectItem value="packaged">Packaged Goods</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-white">Reason for Waste</Label>
                      <Select value={wasteForm.reason} onValueChange={(value) => setWasteForm({...wasteForm, reason: value})}>
                        <SelectTrigger className="bg-white/10 border-white/20 text-white">
                          <SelectValue placeholder="Select reason" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="expired">Expired</SelectItem>
                          <SelectItem value="damaged">Damaged</SelectItem>
                          <SelectItem value="overstock">Overstock</SelectItem>
                          <SelectItem value="cosmetic">Cosmetic defects</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600"
                    >
                      Generate AI Recommendation
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* AI Recommendations */}
              <Card className="bg-white/5 backdrop-blur-xl border-white/10">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Brain className="w-5 h-5 mr-2 text-blue-400" />
                    AI Recommendations
                  </CardTitle>
                  <CardDescription className="text-slate-300">
                    Smart suggestions based on your waste data
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-emerald-300 font-medium">Recommended Action</span>
                        <Badge className="bg-emerald-500/20 text-emerald-300">AI Suggestion</Badge>
                      </div>
                      <p className="text-white">Donate to local food bank within 24 hours</p>
                      <p className="text-sm text-slate-300 mt-1">Confidence: 92%</p>
                    </div>
                    
                    <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-blue-300 font-medium">Alternative Option</span>
                        <Badge className="bg-blue-500/20 text-blue-300">Secondary</Badge>
                      </div>
                      <p className="text-white">Apply 50% discount and sell immediately</p>
                      <p className="text-sm text-slate-300 mt-1">Confidence: 78%</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <Label className="text-white">What action did you take?</Label>
                    <Select>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white mt-2">
                        <SelectValue placeholder="Select your action" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="donated">Donated to food bank</SelectItem>
                        <SelectItem value="discounted">Applied discount</SelectItem>
                        <SelectItem value="composted">Composted</SelectItem>
                        <SelectItem value="returned">Returned to supplier</SelectItem>
                        <SelectItem value="disposed">Disposed</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button className="w-full mt-3 bg-white/10 hover:bg-white/20 border border-white/20">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Confirm Action
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* History Tab */}
          <TabsContent value="history">
            <Card className="bg-white/5 backdrop-blur-xl border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <History className="w-5 h-5 mr-2 text-emerald-400" />
                  Waste Log History
                </CardTitle>
                <CardDescription className="text-slate-300">
                  Track your sustainability performance over time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Sample history entries */}
                  {[
                    { date: "2024-01-08", product: "Milk cartons", quantity: 5, action: "Donated", aiMatch: true },
                    { date: "2024-01-07", product: "Bread loaves", quantity: 8, action: "Discounted", aiMatch: true },
                    { date: "2024-01-06", product: "Apples", quantity: 12, action: "Disposed", aiMatch: false },
                  ].map((entry, index) => (
                    <div key={index} className="p-4 rounded-lg bg-white/5 border border-white/10">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-white font-medium">{entry.product}</div>
                          <div className="text-sm text-slate-300">Quantity: {entry.quantity} • {entry.date}</div>
                          <div className="text-sm text-slate-300">Action taken: {entry.action}</div>
                        </div>
                        <div className="text-right">
                          {entry.aiMatch ? (
                            <Badge className="bg-emerald-500/20 text-emerald-300">
                              <CheckCircle className="w-3 h-3 mr-1" />
                              AI Match
                            </Badge>
                          ) : (
                            <Badge className="bg-orange-500/20 text-orange-300">
                              <AlertTriangle className="w-3 h-3 mr-1" />
                              Deviation
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Sustainable Products Tab */}
          <TabsContent value="products">
            <Card className="bg-white/5 backdrop-blur-xl border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <ShoppingCart className="w-5 h-5 mr-2 text-emerald-400" />
                  Sustainable Product Catalog
                </CardTitle>
                <CardDescription className="text-slate-300">
                  Discover eco-friendly alternatives and longer-lasting products
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { name: "Organic Milk - Extended Shelf Life", category: "Dairy", sustainability: 95, price: "$4.99" },
                    { name: "Compostable Food Containers", category: "Packaging", sustainability: 98, price: "$12.99" },
                    { name: "Local Farm Fresh Produce", category: "Produce", sustainability: 92, price: "$2.49/lb" },
                  ].map((product, index) => (
                    <div key={index} className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-colors">
                      <div className="mb-3">
                        <h3 className="text-white font-medium">{product.name}</h3>
                        <p className="text-sm text-slate-300">{product.category}</p>
                      </div>
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-300">Sustainability Score</span>
                          <span className="text-emerald-400">{product.sustainability}%</span>
                        </div>
                        <Progress value={product.sustainability} className="h-2" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-white">{product.price}</span>
                        <Button size="sm" className="bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300">
                          Learn More
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Leaderboard Tab */}
          <TabsContent value="leaderboard">
            <Card className="bg-white/5 backdrop-blur-xl border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Award className="w-5 h-5 mr-2 text-emerald-400" />
                  Sustainability Leaderboard
                </CardTitle>
                <CardDescription className="text-slate-300">
                  See how your store ranks in waste reduction performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { rank: 1, name: "GreenMart Downtown", score: 97, trend: "+5%" },
                    { rank: 2, name: "EcoStore Plaza", score: 94, trend: "+2%" },
                    { rank: 3, name: "Your Store (ST-001)", score: 87, trend: "+8%", isUser: true },
                    { rank: 4, name: "FreshLife Market", score: 83, trend: "-1%" },
                    { rank: 5, name: "NaturalChoice", score: 78, trend: "+3%" },
                  ].map((store, index) => (
                    <div 
                      key={index} 
                      className={`p-4 rounded-lg border transition-colors ${
                        store.isUser 
                          ? 'bg-emerald-500/10 border-emerald-500/30' 
                          : 'bg-white/5 border-white/10 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                            store.rank === 1 ? 'bg-yellow-500 text-yellow-900' :
                            store.rank === 2 ? 'bg-gray-400 text-gray-900' :
                            store.rank === 3 ? 'bg-orange-500 text-orange-900' :
                            'bg-white/20 text-white'
                          }`}>
                            #{store.rank}
                          </div>
                          <div>
                            <div className={`font-medium ${store.isUser ? 'text-emerald-300' : 'text-white'}`}>
                              {store.name}
                            </div>
                            <div className="text-sm text-slate-300">Sustainability Score: {store.score}%</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`text-sm flex items-center ${
                            store.trend.startsWith('+') ? 'text-emerald-400' : 'text-orange-400'
                          }`}>
                            <TrendingUp className="w-4 h-4 mr-1" />
                            {store.trend}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ClientPortal;
