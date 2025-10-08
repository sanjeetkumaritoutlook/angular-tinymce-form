## ✅ The Correct Approach

To fix this, you need the child component to render immediately (so it can emit formReady),

but hide its own form content until it’s loaded.

You’ll still show a global loader in the parent, but now it’s driven by the child’s event.

🧠 Why This Works

Now the <app-child> renders immediately.

Its ngOnInit() runs → triggers formReady.emit() after 800ms.

Parent receives the event → sets isLoading = false → removes spinne

```
Don’t wrap your <app-child> inside the *ngIf="!isLoading".
The child must mount first to emit the ready signal.
```
## Bad Approch, which never works

Initially, isLoading = true, so Angular renders the else loader block.

The app-child component is not created yet (because it’s inside the *ngIf="!isLoading").

Since the child never gets created, its ngOnInit() never runs →

it never calls formReady.emit() →

parent never receives the event →

loader stays forever. 😅