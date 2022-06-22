const screens = {
    login_screen: loginScreen,
    register_screen: registerScreen,
    dashboard_screen: dashboardScreen,
    withdraw_screen: withdrawScreen
};

const atmRoutes = {
    from_login_to_register_screen: (stack) => {
        stack.push(screens.register_screen);
    },
    from_register_to_login_screen: (stack) => {
        stack.pop();
    },
    from_login_to_dashboard_screen: (stack) => {
        stack.pop();
        stack.push(screens.dashboard_screen);
    }
}