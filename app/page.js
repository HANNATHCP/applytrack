"use client";
import { useState } from "react";
export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("Wishlist");
  const applications = [
  {
    company: "Google",
    role: "Frontend Developer",
    status: "Applied",
  },
  {
    company: "Microsoft",
    role: "Software Engineer",
    status: "Interview",
  },
  {
    company: "TCS",
    role: "Full Stack Developer",
    status: "Wishlist",
  },
];
  const totalApplications = applications.length;
  const appliedApplications = applications.filter(
  (application) => application.status === "Applied"
  ).length;
  const interviewApplications = applications.filter(
  (application) => application.status === "Interview"
  ).length;
  return (
    <>
    <header className="border-b border-slate-800 px-8 py-5">
      <h1 className="text-2xl font-bold">ApplyTrack</h1>

      <p className="text-sm text-slate-400">
      Your placement journey starts here.</p>
    </header>

    <main className="px-8 py-10" >
      <h2 className="text-3xl font-bold">  Welcome to your dashboard</h2>

      <p className="mt-2 text-slate-400">Track your placement applications in one place.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
          <p className="text-sm text-slate-400">Total Applications</p>
          <p className="text-3xl font-bold">{totalApplications}</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-5"> 
          <p className="text-sm text-slate-400">Applied Applications</p>
          <p className="text-3xl font-bold">{appliedApplications}</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-5"> 
          <p className="text-sm text-slate-400">Interview Applications</p>
          <p className="text-3xl font-bold">{interviewApplications}</p>
          </div>
      </div>
      <h2 className="mt-10 text-xl font-semibold">Recent Applications</h2>
      <p className="mt-1 text-sm text-slate-400">Keep track of your latest job applications.</p>

      <button onClick={() =>  setShowForm(!showForm)} className="mt-5 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-950">
      Add Application </button>

      
      {showForm && (
      <div className="mt-6 space-y-4 rounded-xl border border-slate-800 bg-slate-900 p-5">
      
      <div>
        <h3 className="text-lg font-semibold">Add a new application</h3>
        <p className="mt-1 text-sm text-slate-400">
        Enter the details of a job application.
        </p>
      </div>

       <label className="mt-4 block text-sm text-slate-300">
        Company Name
        <input 
          type="text" 
          placeholder="e.g. Google" 
          value={companyName} onChange={(event) => setCompanyName(event.target.value)}
          className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-2 text-sm outline-none" />
      </label>

      <label className="mt-4 block text-sm text-slate-300">
      Job Role
      <input
      type="text"
      placeholder="e.g. Frontend Developer"
      value={role} onChange={(event) => setRole(event.target.value)}
      className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-2 text-sm outline-none"/>
      </label>

      <label className="mt-4 block text-sm text-slate-300">
      Application Status
      <select
        value={status} onChange={(event) => setStatus(event.target.value)}
        className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-2 text-sm outline-none">
        <option>Wishlist</option>
        <option>Applied</option>
        <option>Interview</option>
        <option>Offer</option>
        <option>Rejected</option>
      </select>
      </label>

      <button
        type="button"
        onClick={async () => {
            const response = await fetch("/api/applications",{
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                company: companyName,
                role: role,
                status: status,
              }),
            });
            const data = await response.json();
            console.log(data);
      }}
      className="mt-5 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-950">
      Save Application
      </button>
      
      <button
        type="button"
        onClick={() => setShowForm(false)}
        className="ml-3 rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-300">
        Cancel
      </button>
      </div>
      )}
        <ul className="mt-6 space-y-2">
          {applications.map((application) => (
            <li key={application.company} className="rounded-lg border border-slate-800 px-4 py-3" >
              <h3 className="font-semibold">{application.company}</h3>
              <p className="text-sm text-slate-400">{application.role}</p>
              <span className="mt-2 inline-block rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">{application.status}</span>
            </li>
            ))}
        </ul>
                  
    </main>
    </>
  );
}