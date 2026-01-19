export interface SignInResponse {
    error: boolean;
    message: string | Record<string, string[]>;
    data: {
        token: string;
    };
}

export async function signInService(data: FormData): Promise<SignInResponse> {
    // TODO: Implement actual API call
    // Simulating a successful login for now
    return new Promise((resolve) => {
        setTimeout(() => {
            // Mock successful response
            // Change to true to mock error
            const mockError = false;

            if (mockError) {
                resolve({
                    error: true,
                    message: "Invalid credentials",
                    data: { token: "" },
                });
            } else {
                resolve({
                    error: false,
                    message: "Success",
                    data: {
                        token: "mock_token_12345",
                    },
                });
            }
        }, 1000);
    });
}
