
interface DisplayProps {
  value: string;
}

const Display = ({ value }: DisplayProps) => {
  return (
    <div className="bg-slate-900 rounded-2xl p-6 mb-6 border border-slate-600">
      <div className="text-right">
        <div className="text-4xl font-mono text-white overflow-hidden">
          {value}
        </div>
      </div>
    </div>
  );
};

export default Display;
