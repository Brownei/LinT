/* eslint-disable react/prop-types */
// import React from "react"
// import { useProfile } from "../../hooks/use-profile"

// const ProfileHover = ({ username }) => {
//     const SHOW_DELAY = 350
//     const SHOW_DURATION = 300
//     const HIDE_DELAY = 200
//     const HIDE_DURATION = 200

//     const [currentState, dispatch] = React.useReducer(
//         // Tip: console.log(state, action) when debugging.
//         (state, action) => {
//             // Pressing within a card should always hide it.
//             // No matter which stage we're in.
//             if (action === 'pressed') {
//                 return hidden()
//             }
    
//             // --- Hidden ---
//             // In the beginning, the card is not displayed.
//             function hidden() {
//                 return {stage: 'hidden'}
//             }
    
//             // The user can kick things off by hovering a target.
//             if (state.stage === 'hidden') {
//                 if (action === 'hovered') {
//                     return mightShow(SHOW_DELAY)
//                 }
//             }
    
//             // --- Might Show ---
//             // The card is not visible yet but we're considering showing it.
//             function mightShow(waitMs) {
//                 return {
//                     stage: 'might-show',
//                     effect() {
//                         const id = setTimeout(() => dispatch('hovered-long-enough'), waitMs)
//                         return () => {
//                         clearTimeout(id)
//                         }
//                     },
//                 }
//             }
    
//             // We'll make a decision at the end of a grace period timeout.
//             if (state.stage === 'might-show') {
//                 if (action === 'unhovered') {
//                     return hidden()
//                 }
//                 if (action === 'hovered-long-enough') {
//                     return showing()
//                 }
//             }
    
//             // --- Showing ---
//             // The card is beginning to show up and then will remain visible.
//             function showing() {
//                 return {stage: 'showing'}
//             }
    
//             // If the user moves the pointer away, we'll begin to consider hiding it.
//             if (state.stage === 'showing') {
//                 if (action === 'unhovered') {
//                     return mightHide(HIDE_DELAY)
//                 }
//             }
    
//             // --- Might Hide ---
//             // The user has moved hover away from a visible card.
//             function mightHide(waitMs) {
//                 return {
//                     stage: 'might-hide',
//                     effect() {
//                         const id = setTimeout(
//                         () => dispatch('unhovered-long-enough'),
//                         waitMs,
//                         )
//                         return () => clearTimeout(id)
//                     },
//                 }
//             }
    
//             // We'll make a decision based on whether it received hover again in time.
//             if (state.stage === 'might-hide') {
//                 if (action === 'hovered') {
//                     return showing()
//                 }
//                 if (action === 'unhovered-long-enough') {
//                     return hiding(HIDE_DURATION)
//                 }
//             }
    
//             // --- Hiding ---
//             // The user waited enough outside that we're hiding the card.
//             function hiding(animationDurationMs) {
//                 return {
//                     stage: 'hiding',
//                     effect() {
//                         const id = setTimeout(
//                         () => dispatch('finished-animating-hide'),
//                         animationDurationMs,
//                         )
//                         return () => clearTimeout(id)
//                     },
//                 }
//             }
    
//             // While hiding, we don't want to be interrupted by anything else.
//             // When the animation finishes, we loop back to the initial hidden state.
//             if (state.stage === 'hiding') {
//                 if (action === 'finished-animating-hide') {
//                     return hidden()
//                 }
//             }
        
//                 return state
//             },
//         {stage: 'hidden'},
//     )

//     React.useEffect(() => {
//         if (currentState.effect) {
//             const effect = currentState.effect
//             delete currentState.effect // Mark as completed
//             return effect()
//         }
//     }, [currentState])

//     const prefetchProfileQuery = useProfile()
//     const prefetchedProfile = React.useRef(false)
//     const prefetchIfNeeded = React.useCallback(async () => {
//         if (!prefetchedProfile.current) {
//             prefetchedProfile.current = true
//             prefetchProfileQuery(username)
//         }
//     }, [prefetchProfileQuery, username])


//     const onPointerEnterTarget = React.useCallback(() => {
//         prefetchIfNeeded()
//         dispatch('hovered')
//     }, [prefetchIfNeeded])
    
//     const onPointerLeaveTarget = React.useCallback(() => {
//         dispatch('unhovered')
//     }, [])
    
//     const onPointerEnterCard = React.useCallback(() => {
//         dispatch('hovered')
//     }, [])
    
//     const onPointerLeaveCard = React.useCallback(() => {
//         dispatch('unhovered')
//     }, [])
    
//     const onPress = React.useCallback(() => {
//         dispatch('pressed')
//     }, [])
    
//     const isVisible =
//         currentState.stage === 'showing' ||
//         currentState.stage === 'might-hide' ||
//         currentState.stage === 'hiding'
    
//     const animationStyle = {
//         animation:
//             currentState.stage === 'hiding' ? `avatarHoverFadeOut ${HIDE_DURATION}ms both` : `avatarHoverFadeIn ${SHOW_DURATION}ms both`,
//     }

//     return (
//         <main>ProfileHover</main>
//     )
// }

// export default ProfileHover