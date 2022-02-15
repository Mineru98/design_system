import React, { useState } from "react";
import PropTypes from "prop-types";
import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

interface Common {
	height: number;
	width:
		| 1
		| 2
		| 3
		| 4
		| 5
		| 6
		| 7
		| 8
		| 9
		| 10
		| 11
		| 12
		| 13
		| 14
		| 15
		| 16
		| 17
		| 18
		| 19
		| 20
		| 21
		| 22
		| 23
		| 24
		| 25
		| 26
		| 27
		| 28
		| 29
		| 30
		| 31
		| 32
		| 33
		| 34
		| 35
		| 36
		| 37
		| 38
		| 39
		| 40
		| 41
		| 42
		| 43
		| 44
		| 45
		| 46
		| 47
		| 48
		| 49
		| 50
		| 51
		| 52
		| 53
		| 54
		| 55
		| 56
		| 57
		| 58
		| 59
		| 60
		| 61
		| 62
		| 63
		| 64
		| 65
		| 66
		| 67
		| 68
		| 69
		| 70
		| 71
		| 72
		| 73
		| 74
		| 75
		| 76
		| 77
		| 78
		| 79
		| 80
		| 81
		| 82
		| 83
		| 84
		| 85
		| 86
		| 87
		| 88
		| 89
		| 90
		| 91
		| 92
		| 93
		| 94
		| 95
		| 96
		| 97
		| 98
		| 99
		| 100;
}

interface Skeleton extends Common {
	row: 1 | 2 | 3 | 4 | 5 | 6;
}

interface SkeletonWrapper extends Common {
	isEnd: boolean;
}

const loading = keyframes`
	from {
		left: -150px;
	}
	to   {
		left: 100%;
	}
`;

const SkeletonWrapper = styled.div<SkeletonWrapper>`
	border-radius: 4px;
	width: ${(props) => props.width}%;
	height: ${(props) => props.height}px;
	position: relative;
	overflow: hidden;
	background: #0000000f;
	&:before {
		content: "";
		position: absolute;
		left: -150px;
		top: 0;
		height: 100%;
		width: 45%;
		border-radius: 4px;
		background: linear-gradient(to right, transparent 0%, #e8e8e8 50%, transparent 100%);
		animation: ${loading} 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
	}
	${(props) => !props.isEnd && "margin-bottom: 8px;"}
`;

const Skeleton = ({ row, width, height }: Skeleton) => {
	if (row === 1) {
		return <SkeletonWrapper width={width} height={height} isEnd={true} />;
	} else {
		const arr = Array.from({ length: row }, (v, i) => i);
		return (
			<>
				{arr.map((item: number) => {
					if (arr.length - 1 !== item) {
						return <SkeletonWrapper width={width} height={height} isEnd={false} key={item} />;
					} else {
						return <SkeletonWrapper width={width} height={height} isEnd={true} key={item} />;
					}
				})}
			</>
		);
	}
};

Skeleton.propTypes = {
	row: PropTypes.number,
	width: PropTypes.number,
	height: PropTypes.number,
};

Skeleton.defaultProps = {
	row: 1,
	width: 50,
	height: 16,
};

export default Skeleton;
