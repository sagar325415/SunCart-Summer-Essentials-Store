import { Spinner } from "@heroui/react";
import React from "react";

const LoadingPage = () => {
    return (
        <div className="flex h-[85vh] items-center justify-center">
            <Spinner size="xl" />
        </div>
    );
};

export default LoadingPage;