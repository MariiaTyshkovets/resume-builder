const Loader = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-theme">
        <svg
            className="animate-spin h-12 w-12 text-primary"
            viewBox="0 0 50 50"
            fill="none"
        >
            <circle
                className="opacity-25"
                cx="25"
                cy="25"
                r="20"
                stroke="currentColor"
                strokeWidth="5"
            />
            <path
                className="opacity-75"
                fill="currentColor"
                d="M25 5a20 20 0 0 1 0 40v-5a15 15 0 0 0 0-30V5z"
            />
        </svg>
    </div>
);

export default Loader;