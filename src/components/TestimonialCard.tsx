const TestimonialCard = ({ name, quote }: { name: string; quote: string }) => {
    return (
        <div className="p-4 rounded-lg border bg-gradient-to-br from-purple-200 to-indigo-300 transition-colors">
            <div className="text-sm text-slate-700">“{quote}”</div>
            <div className="mt-3 text-xs text-slate-500">— {name}</div>
        </div>
    );
}
export default TestimonialCard
