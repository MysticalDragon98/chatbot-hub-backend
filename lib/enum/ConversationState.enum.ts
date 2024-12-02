export enum ConversationState {
    None = "none",
    Default = "default",
    ChoosingRole = "choosing-role",

    SendingDriverDocument = "sending-driver-document",
    SendingDriverDocumentConfirmation = "sending-driver-document-confirmation",
    SendingDriverDocumentIDNumber = "sending-driver-document-id-number",
    SendingDriverDocumentName = "sending-driver-document-name",

    SendingFirstPassengerWelcomeReply = "sending-first-passenger-welcome-reply",
    SendingTripRequestReply = "sending-trip-request-reply",
    SendingDestination = "sending-destination",
    SendingCurrentLocation = "sending-current-location",
    ConfirmingTripRequest = "confirming-trip-request",
    WaitingForDriver = "waiting-for-driver",
    
    //* Pickup States
    DriverEnRoadToPickup = "driver-en-road-to-pickup",
    CustomerWaitingAtPickupLocation = "customer-waiting-at-pickup-location",

    //* AtPickupLocation States
    DriverAtPickupLocation = "driver-at-pickup-location",
    SendingTripCode = "SendingTripCode",
    DriverEnRoadToDestination = "driver-en-road-to-destination",
    VerifyingDriver = "verifying-driver",
    SendingDriverVerificationRejectedReason = "sending-driver-verification-rejected-reason",
    ChoosingDefaultDriverReply = "choosing-default-driver-reply",
    //* Conversation States
}