class NavigationController {

    stack = [];

    constructor(rootReference, startingRoute) {
        this.rootReference = rootReference;
        this.stack = [startingRoute];
    }

    renderTopEntryInStack = () => {
        this.rootReference.innerHTML = '';
        const lastItem = this.stack.pop()
        this.stack.push(lastItem);
        lastItem().forEach(kid => {
            this.rootReference.appendChild(kid);
        });
    }

    navigate = route => {
        route(this.stack);
        this.renderTopEntryInStack();
    }

    popBackStack = () => {
        this.stack.pop();
        this.renderTopEntryInStack();
    }

}