"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const events = require("aws-cdk-lib/aws-events");
const kinesis = require("aws-cdk-lib/aws-kinesis");
const cdk = require("aws-cdk-lib");
const targets = require("aws-cdk-lib/aws-events-targets");
// ---------------------------------
// Define a rule that triggers a put to a Kinesis stream every 1min.
const app = new cdk.App();
const stack = new cdk.Stack(app, 'aws-cdk-kinesis-event-target');
const stream = new kinesis.Stream(stack, 'MyStream');
const event = new events.Rule(stack, 'EveryMinute', {
    schedule: events.Schedule.rate(cdk.Duration.minutes(1)),
});
event.addTarget(new targets.KinesisStream(stream, {
    partitionKeyPath: events.EventField.eventId,
}));
app.synth();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZWcua2luZXNpcy1zdHJlYW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbnRlZy5raW5lc2lzLXN0cmVhbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUFpRDtBQUNqRCxtREFBbUQ7QUFDbkQsbUNBQW1DO0FBQ25DLDBEQUEwRDtBQUUxRCxvQ0FBb0M7QUFDcEMsb0VBQW9FO0FBRXBFLE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBRTFCLE1BQU0sS0FBSyxHQUFHLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsOEJBQThCLENBQUMsQ0FBQztBQUVqRSxNQUFNLE1BQU0sR0FBRyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQ3JELE1BQU0sS0FBSyxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsYUFBYSxFQUFFO0lBQ2xELFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUN4RCxDQUFDLENBQUM7QUFFSCxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksT0FBTyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUU7SUFDaEQsZ0JBQWdCLEVBQUUsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPO0NBQzVDLENBQUMsQ0FBQyxDQUFDO0FBRUosR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZXZlbnRzIGZyb20gJ2F3cy1jZGstbGliL2F3cy1ldmVudHMnO1xuaW1wb3J0ICogYXMga2luZXNpcyBmcm9tICdhd3MtY2RrLWxpYi9hd3Mta2luZXNpcyc7XG5pbXBvcnQgKiBhcyBjZGsgZnJvbSAnYXdzLWNkay1saWInO1xuaW1wb3J0ICogYXMgdGFyZ2V0cyBmcm9tICdhd3MtY2RrLWxpYi9hd3MtZXZlbnRzLXRhcmdldHMnO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIERlZmluZSBhIHJ1bGUgdGhhdCB0cmlnZ2VycyBhIHB1dCB0byBhIEtpbmVzaXMgc3RyZWFtIGV2ZXJ5IDFtaW4uXG5cbmNvbnN0IGFwcCA9IG5ldyBjZGsuQXBwKCk7XG5cbmNvbnN0IHN0YWNrID0gbmV3IGNkay5TdGFjayhhcHAsICdhd3MtY2RrLWtpbmVzaXMtZXZlbnQtdGFyZ2V0Jyk7XG5cbmNvbnN0IHN0cmVhbSA9IG5ldyBraW5lc2lzLlN0cmVhbShzdGFjaywgJ015U3RyZWFtJyk7XG5jb25zdCBldmVudCA9IG5ldyBldmVudHMuUnVsZShzdGFjaywgJ0V2ZXJ5TWludXRlJywge1xuICBzY2hlZHVsZTogZXZlbnRzLlNjaGVkdWxlLnJhdGUoY2RrLkR1cmF0aW9uLm1pbnV0ZXMoMSkpLFxufSk7XG5cbmV2ZW50LmFkZFRhcmdldChuZXcgdGFyZ2V0cy5LaW5lc2lzU3RyZWFtKHN0cmVhbSwge1xuICBwYXJ0aXRpb25LZXlQYXRoOiBldmVudHMuRXZlbnRGaWVsZC5ldmVudElkLFxufSkpO1xuXG5hcHAuc3ludGgoKTtcbiJdfQ==