import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function DashboardPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-slate-800">Dashboard</h1>
        <button className="rounded-lg bg-[#4E73DF] px-4 py-2 text-sm font-medium text-white hover:bg-[#4E73DF]/90">
          Generate Report
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-l-4 border-l-[#4E73DF]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium uppercase text-[#4E73DF]">Earnings (Monthly)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-800">$40,000</div>
          </CardContent>
        </Card>
        <Card className="border-l-4 border-l-emerald-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium uppercase text-emerald-500">Earnings (Annual)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-800">$215,000</div>
          </CardContent>
        </Card>
        <Card className="border-l-4 border-l-sky-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium uppercase text-sky-500">Tasks</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="text-2xl font-bold text-slate-800">50%</div>
            <Progress value={50} className="h-2 bg-sky-100" indicatorClassName="bg-sky-500" />
          </CardContent>
        </Card>
        <Card className="border-l-4 border-l-yellow-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium uppercase text-yellow-500">Pending Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-800">18</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Earnings Overview</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Add your chart component here */}
            <div className="h-[300px] rounded bg-slate-100" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Revenue Sources</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Add your pie chart component here */}
            <div className="h-[300px] rounded bg-slate-100" />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Projects</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { name: "Server Migration", progress: 20, color: "bg-red-500" },
              { name: "Sales Tracking", progress: 40, color: "bg-yellow-500" },
              { name: "Customer Database", progress: 60, color: "bg-[#4E73DF]" },
              { name: "Payout Details", progress: 80, color: "bg-sky-500" },
            ].map((project) => (
              <div key={project.name} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>{project.name}</span>
                  <span>{project.progress}%</span>
                </div>
                <Progress value={project.progress} className="h-4 bg-slate-100" indicatorClassName={project.color} />
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Illustrations</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="aspect-video rounded bg-slate-100" />
            <p className="text-sm text-slate-600">
              Add some quality, svg illustrations to your project courtesy of unDraw, a constantly updated collection of
              beautiful svg images that you can use completely free and without attribution!
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}




// "use client"

// import LoginForm from "@/forms/login-form"

// export default function SyntheticV0PageForDeployment() {
//   return <LoginForm />
//   // return <h1>Hello World</h1>;
// }