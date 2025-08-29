"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function HomePage() {

  const systemModules = [
    {
      id: "ai-factory",
      title: "AI Development Factory",
      description: "ระบบพัฒนาซอฟต์แวร์อัตโนมัติด้วย AI",
      features: ["Code Generation", "Quality Assurance", "Automated Testing", "Deployment"],
      status: "Active",
      href: "/ai-factory",
      gradient: "ai-factory-gradient",
      border: "ai-factory-border",
    },
    {
      id: "marketplace",
      title: "E-commerce Marketplace",
      description: "แพลตฟอร์มการค้าออนไลน์แบบครบวงจร",
      features: ["Multi-tenant", "Thai Payment", "AI Recommendations", "Analytics"],
      status: "Active", 
      href: "/marketplace",
      gradient: "marketplace-gradient",
      border: "marketplace-border",
    },
    {
      id: "admin",
      title: "System Administration",
      description: "จัดการระบบและผู้ใช้งานแบบรวมศูนย์",
      features: ["User Management", "System Monitor", "Configuration", "Reports"],
      status: "Active",
      href: "/admin",
      gradient: "bg-gradient-to-br from-purple-600/10 via-pink-600/10 to-red-600/10",
      border: "border border-purple-500/20 shadow-lg shadow-purple-500/10",
    }
  ];

  const systemStats = [
    { label: "Active Projects", value: "24", change: "+12%" },
    { label: "AI Agents", value: "8", change: "+2" },
    { label: "Marketplace Orders", value: "1,247", change: "+28%" },
    { label: "System Uptime", value: "99.9%", change: "0%" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">RF</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  RunFuture Economy
                </h1>
                <p className="text-sm text-muted-foreground">AI-Powered Development & E-commerce Platform</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="status-active">System Online</Badge>
              <Button variant="outline">Login</Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              ระบบพัฒนาและจัดการที่ขับเคลื่อนด้วย AI
            </h2>
            <p className="text-lg text-muted-foreground mb-8 font-thai">
              แพลตฟอร์มแบบครบวงจรที่รวม AI Development Factory และ E-commerce Marketplace 
              เพื่อการพัฒนาและขยายธุรกิจอย่างไม่มีขีดจำกัด
            </p>
            
            {/* System Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {systemStats.map((stat, index) => (
                <Card key={index} className="card-hover">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                    <div className="text-xs text-green-600">{stat.change}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* System Modules */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">System Modules</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {systemModules.map((module) => (
              <Card key={module.id} className={`card-hover ${module.gradient} ${module.border}`}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{module.title}</CardTitle>
                    <Badge className="status-active text-xs">{module.status}</Badge>
                  </div>
                  <CardDescription className="font-thai">{module.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {module.features.map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    <Link href={module.href}>
                      <Button className="w-full mt-4">
                        เข้าสู่ระบบ
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* System Architecture Overview */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-slate-900 to-blue-900 text-white">
            <CardHeader>
              <CardTitle className="text-2xl">System Architecture</CardTitle>
              <CardDescription className="text-slate-300">
                โครงสร้างระบบแบบ Microservices ที่สามารถขยายได้และปลอดภัย
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid grid-cols-3 w-full bg-slate-800">
                  <TabsTrigger value="overview" className="data-[state=active]:bg-slate-700">Overview</TabsTrigger>
                  <TabsTrigger value="ai-factory" className="data-[state=active]:bg-slate-700">AI Factory</TabsTrigger>
                  <TabsTrigger value="marketplace" className="data-[state=active]:bg-slate-700">Marketplace</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="text-slate-200 mt-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Core Technologies</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Next.js 14 with TypeScript</li>
                        <li>• Prisma ORM with PostgreSQL</li>
                        <li>• Redis for Caching</li>
                        <li>• OpenRouter AI Integration</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Key Features</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Multi-tenant Architecture</li>
                        <li>• Real-time Analytics</li>
                        <li>• Automated Testing</li>
                        <li>• Thai Localization</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="ai-factory" className="text-slate-200 mt-4">
                  <div className="space-y-4">
                    <h4 className="font-semibold">AI Development Factory Components</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div className="bg-slate-800/50 p-3 rounded">
                        <strong>Code Generation Agents</strong>
                        <p>Automated development with React, Node.js, and database schema generation</p>
                      </div>
                      <div className="bg-slate-800/50 p-3 rounded">
                        <strong>Quality Assurance</strong>
                        <p>Automated testing, security audits, and performance optimization</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="marketplace" className="text-slate-200 mt-4">
                  <div className="space-y-4">
                    <h4 className="font-semibold">E-commerce Marketplace Features</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div className="bg-slate-800/50 p-3 rounded">
                        <strong>Multi-vendor Platform</strong>
                        <p>Support for multiple sellers with isolated data and customizable stores</p>
                      </div>
                      <div className="bg-slate-800/50 p-3 rounded">
                        <strong>Thai Payment Integration</strong>
                        <p>PromptPay, SCB Easy, and local banking support with tax compliance</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </section>

        {/* Quick Actions */}
        <section className="text-center">
          <h3 className="text-2xl font-bold mb-6">Quick Actions</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Start AI Project
            </Button>
            <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
              Create Store
            </Button>
            <Button size="lg" variant="outline">
              View Documentation
            </Button>
            <Button size="lg" variant="outline">
              System Health
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white/80 backdrop-blur-sm mt-16">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center text-muted-foreground">
            <p className="font-thai">© 2024 RunFuture Economy System - AI-Powered Development & E-commerce Platform</p>
            <p className="text-sm mt-2">Built with Next.js, TypeScript, and Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  );
}