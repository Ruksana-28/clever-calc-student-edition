
import Calculator from "@/components/Calculator";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Scientific Calculator</h1>
          <p className="text-slate-300">Advanced mathematical operations</p>
        </div>
        <Calculator />
      </div>
    </div>
  );
};

export default Index;
