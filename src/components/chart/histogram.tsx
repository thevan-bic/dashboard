// import { BarDatum, ResponsiveBar } from '@nivo/bar';
// import { Card, Flex, Popover, Typography, theme } from 'antd';
// import dayjs from 'dayjs';
// import React, { useEffect, useState, useMemo } from 'react';
// import { IBlockchainCategory } from '../../interfaces';
// import { DEFAULT_BORDER_RADIUS, DEFAULT_HIST_HEIGHT } from '../../theme';
// import { getFFTime } from '../../utils';
// import { EmptyStateCard } from '../Cards/EmptyStateCard';
// import { FFCircleLoader } from '../Loaders/FFCircleLoader';
//
// const { Text } = Typography;
//
// interface Props {
//     colors: string[];
//     data: BarDatum[] | undefined;
//     emptyText: string;
//     height?: string | number;
//     includeLegend: boolean;
//     indexBy: string;
//     isEmpty: boolean;
//     keys: string[];
//     isLoading: boolean;
//     filterButton?: JSX.Element;
//     categoryMap: {
//         [key: string]: IBlockchainCategory;
//     };
// }
//
// // Circle dot component to replace MUI Circle icon
// const CircleDot: React.FC<{ color: string; size?: number }> = ({ color, size = 12 }) => (
//     <div
//         style={{
//             width: size,
//             height: size,
//             borderRadius: '50%',
//             backgroundColor: color,
//             display: 'inline-block',
//             marginRight: 8,
//         }}
//     />
// );
//
// export const getTruncatedColor = (isDark: boolean) => (isDark ? '#FFFFFF' : '#000000');
//
// export const Histogram: React.FC<Props> = ({
//     colors,
//     data,
//     emptyText,
//     height,
//     includeLegend,
//     indexBy,
//     isEmpty,
//     keys,
//     isLoading,
//     filterButton,
//     categoryMap,
// }) => {
//     const { token } = theme.useToken();
//     const [xAxisValues, setXAxisValues] = useState<(string | number)[]>([]);
//     const [popoverBucket, setPopoverBucket] = useState<any>(undefined);
//     const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
//     const [open, setOpen] = useState(false);
//
//     // Determine if dark mode based on Ant Design theme
//     const isDark = useMemo(() => {
//         return (
//             token.colorBgBase === '#000000' ||
//             token.colorBgContainer.startsWith('#1') ||
//             token.colorBgContainer.startsWith('#2')
//         );
//     }, [token]);
//
//     useEffect(() => {
//         if (data) {
//             // Show x axis every other tick
//             setXAxisValues(data.map((d, i) => (i % 2 === 0 ? '' : d.timestamp)));
//         }
//     }, [data]);
//
//     const handleMouseLeave = () => {
//         setOpen(false);
//         setAnchorEl(null);
//         setPopoverBucket(undefined);
//     };
//
//     const handleMouseEnter = (bucket: any, event: any) => {
//         setAnchorEl(event.currentTarget);
//         setPopoverBucket(bucket);
//         setOpen(true);
//     };
//
//     const makePopoverContent = () => {
//         if (!popoverBucket) return null;
//
//         return (
//             <Card
//                 size="small"
//                 style={{
//                     borderRadius: DEFAULT_BORDER_RADIUS,
//                     padding: 8,
//                     backgroundColor: token.colorBgContainer,
//                     border: `1px solid ${token.colorBorder}`,
//                     boxShadow: token.boxShadowSecondary,
//                 }}
//                 bodyStyle={{ padding: 0 }}
//             >
//                 <div style={{ marginBottom: 8 }}>
//                     {Object.entries(popoverBucket.data).map(([key, value]) => {
//                         const color = Object.values(categoryMap).find(
//                             (v) => v.category.toLowerCase() === key.toLowerCase(),
//                         );
//
//                         if (key === 'Truncated' || key === 'timestamp') {
//                             return null;
//                         }
//
//                         return (
//                             <Flex key={key + value} align="center" style={{ marginBottom: 4 }}>
//                                 <CircleDot
//                                     color={
//                                         color?.color ||
//                                         categoryMap[key.toLowerCase() as string]?.color ||
//                                         token.colorPrimary
//                                     }
//                                     size={10}
//                                 />
//                                 <Text strong style={{ fontSize: 14, marginRight: 4 }}>
//                                     {`${key.charAt(0).toUpperCase() + key.slice(1)}:`}
//                                 </Text>
//                                 <Text style={{ fontSize: 14 }}>{`${value ?? 0}`}</Text>
//                             </Flex>
//                         );
//                     })}
//                 </div>
//
//                 <div>
//                     <Text type="secondary" style={{ fontSize: 12, display: 'block' }}>
//                         {getFFTime(popoverBucket.data.timestamp.toString())}
//                     </Text>
//                     <Text type="secondary" style={{ fontSize: 12, display: 'block' }}>
//                         {getFFTime(popoverBucket.data.timestamp.toString(), true)}
//                     </Text>
//                 </div>
//             </Card>
//         );
//     };
//
//     // Returns key array, altered if buckets have a bar that is truncated
//     const getKeys = (data: BarDatum[], keys: string[]) => {
//         if (!data.every((d) => d.Truncated === 0) && !keys.includes('Truncated')) {
//             keys.push('Truncated');
//         }
//         return keys;
//     };
//
//     // Returns colors array, altered if buckets have a bar that is truncated
//     const getColors = (data: BarDatum[], colors: string[]) => {
//         const truncatedColor = getTruncatedColor(isDark);
//         if (!data.every((d) => d.Truncated === 0) && !colors.includes(truncatedColor)) {
//             colors.push(truncatedColor);
//         }
//         return colors;
//     };
//
//     const nivoTheme = useMemo(
//         () => ({
//             background: token.colorBgContainer,
//             axis: {
//                 ticks: {
//                     line: {
//                         stroke: token.colorBorderSecondary,
//                     },
//                     text: {
//                         fill: token.colorTextTertiary,
//                     },
//                 },
//             },
//             grid: {
//                 line: {
//                     stroke: token.colorBorderSecondary,
//                 },
//             },
//         }),
//         [token],
//     );
//
//     const legendConfig = useMemo(() => {
//         if (!includeLegend) return undefined;
//
//         return [
//             {
//                 dataFrom: 'keys' as const,
//                 anchor: 'bottom' as const,
//                 direction: 'row' as const,
//                 justify: false,
//                 translateX: 0,
//                 translateY: 50,
//                 itemsSpacing: 2,
//                 itemWidth: 115,
//                 itemHeight: 10,
//                 itemDirection: 'left-to-right' as const,
//                 itemOpacity: 1,
//                 itemTextColor: token.colorText,
//                 symbolSize: 15,
//                 symbolShape: 'circle' as const,
//             },
//         ];
//     }, [includeLegend, token.colorText]);
//
//     return (
//         <div>
//             {filterButton && (
//                 <Flex justify="flex-end" style={{ marginBottom: 16 }}>
//                     {filterButton}
//                 </Flex>
//             )}
//
//             <div
//                 style={{
//                     width: '100%',
//                     height: height ?? DEFAULT_HIST_HEIGHT,
//                     backgroundColor: token.colorBgContainer,
//                     borderRadius: DEFAULT_BORDER_RADIUS,
//                     border: `1px solid ${token.colorBorder}`,
//                     paddingTop: 8,
//                     position: 'relative',
//                 }}
//             >
//                 {!data || isLoading ? (
//                     <FFCircleLoader height="100%" color="warning" />
//                 ) : isEmpty ? (
//                     <EmptyStateCard height="80%" text={emptyText} />
//                 ) : (
//                     <>
//                         <div style={{ height: '98%', width: '100%' }}>
//                             <ResponsiveBar
//                                 data={data}
//                                 colors={getColors(data, colors)}
//                                 keys={getKeys(data, keys)}
//                                 indexBy={indexBy}
//                                 margin={{ top: 10, right: 5, bottom: 60, left: 40 }}
//                                 padding={0.1}
//                                 valueScale={{ type: 'linear' }}
//                                 indexScale={{ type: 'band', round: true }}
//                                 axisTop={null}
//                                 axisRight={null}
//                                 onMouseEnter={handleMouseEnter}
//                                 onMouseLeave={handleMouseLeave}
//                                 axisBottom={{
//                                     tickSize: 5,
//                                     tickPadding: 5,
//                                     tickRotation: 0,
//                                     format: (v) =>
//                                         xAxisValues?.find((vts) => vts === v)
//                                             ? dayjs(v).format('h:mm')
//                                             : '',
//                                 }}
//                                 axisLeft={{
//                                     tickSize: 5,
//                                     tickPadding: 5,
//                                     tickRotation: 0,
//                                     tickValues: 5,
//                                 }}
//                                 legends={legendConfig}
//                                 motionConfig="stiff"
//                                 enableLabel={false}
//                                 role="application"
//                                 theme={nivoTheme}
//                                 // disable tooltip in favor of popover
//                                 tooltip={() => <></>}
//                             />
//                         </div>
//
//                         {anchorEl && popoverBucket && (
//                             <Popover
//                                 content={makePopoverContent()}
//                                 open={open}
//                                 getPopupContainer={() => anchorEl.parentElement || document.body}
//                                 placement="top"
//                                 overlayStyle={{ pointerEvents: 'none' }}
//                             >
//                                 <div />
//                             </Popover>
//                         )}
//                     </>
//                 )}
//             </div>
//         </div>
//     );
// };
